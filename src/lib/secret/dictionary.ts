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
	solution = solution.toUpperCase();
	const willReturn: CharStatus[] = new Array<CharStatus>(chars.length);
	for(const i in chars){
		if(solution.includes(chars[i])) willReturn[i] = 'exist';
		else willReturn[i] = 'absent';
		if(solution[i] == chars[i]) willReturn[i] = 'correct';
	}
	return willReturn; 
};
