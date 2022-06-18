import type { Char, CharStatus } from '$lib/type';
import DICTIONARY from './dictionary.json';
import { getTodayString } from '$lib/util/date';
import { mulberry32 } from '$lib/util/random';
import { NUM_WORDS } from '$lib/config';

export const getTodaysAnswers = () => {
	const today = getTodayString();
	const seed = today
		.split('')
		.map((char) => char.charCodeAt(0))
		.reduce((sum, val) => sum + val);
	const randomNumberGenerator = mulberry32(seed);

	const keys: string[] = [];
	while (keys.length < NUM_WORDS) {
		const index = Math.floor(randomNumberGenerator() * DICTIONARY.length);
		const key = DICTIONARY[index];
		if (!keys.includes(key)) {
			keys.push(key);
		}
	}
	return keys;
};

export const tryGuess = (chars: Char[], solution: string): CharStatus[] => {
	const answer: string[] = new Array<string>(chars.length);
	for(let i = 0; i < chars.length; i++)
		answer[i] = solution.toUpperCase()[i]
	const willReturn: CharStatus[] = new Array<CharStatus>(chars.length);
	
	willReturn.fill('absent');
	for(let l = 0; l < chars.length; l++)
		if(answer[l] == chars[l]){
			willReturn[l] = 'correct';
			answer[l] = '_';
		}
	
	for(let l = 0; l < chars.length; l++)
		if(willReturn[l] != 'correct' && answer.includes(chars[l]))
			willReturn[l] = 'exist';
	
	return willReturn;
};
