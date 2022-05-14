import type { Char } from '$lib/types';
import WORDS from './words.json';

export const getTodaysAnswers = () => {
	const key0 = Object.keys(WORDS)[0];
	const key1 = Object.keys(WORDS)[1];
	return [key0, key1];
};

export const isInDictionary = (chars: Char[]) => {
	return false;
};
