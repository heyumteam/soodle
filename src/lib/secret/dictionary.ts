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
	const candidates = Object.keys(DICTIONARY);
	while (keys.length < NUM_WORDS) {
		const index = Math.floor(randomNumberGenerator() * candidates.length);
		const key = candidates[index];
		if (!keys.includes(key)) {
			keys.push(key);
		}
	}
	return keys;
};

export const getDescription = (word: string) => {
	const description = DICTIONARY[word as keyof typeof DICTIONARY];
	return description;
};

export const tryGuess = (chars: Char[], solution: string): CharStatus[] => {
	return new Array(chars.length).fill('absent');
};
