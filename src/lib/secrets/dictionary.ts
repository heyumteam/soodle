import DICTIONARY from './dictionary.json';

export const getTodaysAnswers = () => {
	const key0 = Object.keys(DICTIONARY)[0];
	const key1 = Object.keys(DICTIONARY)[1];
	return [key0, key1];
};

export const getDescription = (word: string) => {
	const description = DICTIONARY[word as keyof typeof DICTIONARY];
	return description;
};
