import type { Char, CharStatus } from '$lib/type';
import DICTIONARY from './dictionary.json';
import { NUM_WORDS, START_DATE } from '$lib/config';

export const getTodaysAnswers = () => {
	const today = new Date().getTime();
	const start_date = new Date(START_DATE).getTime();
	const offset = Math.floor((today - start_date) / 86400000);
	const keys = DICTIONARY.slice(0, NUM_WORDS);
	return keys;
};

export const tryGuess = (chars: Char[], solution: string): CharStatus[] => {
	const answer: string[] = new Array<string>(chars.length);
	for (let i = 0; i < chars.length; i++) {
		answer[i] = solution.toUpperCase()[i];
	}

	const willReturn: CharStatus[] = new Array<CharStatus>(chars.length);
	willReturn.fill('absent');

	for (let l = 0; l < chars.length; l++) {
		if (answer[l] == chars[l]) {
			willReturn[l] = 'correct';
			answer[l] = '_';
		}
	}

	for (let l = 0; l < chars.length; l++) {
		if (willReturn[l] != 'correct' && answer.includes(chars[l])) {
			willReturn[l] = 'exist';
		}
	}
	return willReturn;
};
