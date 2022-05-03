import type { Char, Guess, Quiz } from '$lib/types';

export const createQuiz: (answer: string) => Quiz = (answer) => {
	const wordLength = answer.length;
	const guesses: Guess[] = [];
	const currentGuess: Char[] = [];
	return {
		answer,
		wordLength,
		guesses,
		currentGuess
	};
};
