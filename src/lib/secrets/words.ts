import type { Char } from '$lib/types';

const WORDS = [
	'test',
	'power',
	'common'
	// 'optional'
];

export const getTodaysAnswers = () => {
	return [WORDS[0], WORDS[1]];
};

export const isInDictionary = (chars: Char[]) => {
	return false;
};
