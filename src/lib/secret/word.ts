import type { Char } from '$lib/type';
import WORD_LIST from './word.json';

export const isInWordList = (chars: string) => {
	if(WORD_LIST.includes(chars))
	return true;
	else 
	return false;
};