import type { Char } from '$lib/type';
import WORD_LIST from './word.json';

export const isInWordList = (chars: Char[]) => {
	const word = chars.join('');
	return WORD_LIST.includes(word.toLowerCase());
};
