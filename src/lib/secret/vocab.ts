import type { Char } from '$lib/type';
import VOCAB from './vocab.json';

export const isInVocabList = (chars: Char[]) => {
	const word = chars.join('');
	return VOCAB.includes(word.toLowerCase());
};
