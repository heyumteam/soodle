import type { Char, CharStatus, Guess, Quiz } from '$lib/types';

export const createQuiz: (answer: string) => Quiz = (answer) => {
	const wordLength = answer.length;
	const guesses: Guess[] = [];
	const currentGuess: Char[] = [];
	const knownChars: { [char in Char]?: CharStatus } = {};
	return {
		answer,
		wordLength,
		guesses,
		currentGuess,
		knownChars
	};
};
