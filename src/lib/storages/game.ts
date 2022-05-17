import type { Readable, Writable } from 'svelte/store';
import type { Char, Game, Quiz } from '$lib/types';
import { derived, writable } from 'svelte/store';
import { getTodaysAnswers } from '$lib/secrets/dictionary';
import { createQuiz } from './quiz';
import { tryGuess } from '$lib/secrets/dictionary';

type gameStore = {
	subscribe: Writable<Game>['subscribe'];
	nextQuiz: () => void;
	prevQuiz: () => void;
	addChar: (char: Char) => void;
	removeChar: () => void;
};

const createGameStore = () => {
	const answers = getTodaysAnswers();
	const quizzes = answers.map(createQuiz);

	const { subscribe, update } = writable<Game>({
		quizzes,
		currentQuizIndex: 0
	});

	const nextQuiz = () => {
		update((game) => {
			let currentQuizIndex = game.currentQuizIndex;
			if (currentQuizIndex < game.quizzes.length - 1) {
				currentQuizIndex = currentQuizIndex + 1;
			}
			return {
				quizzes: game.quizzes,
				currentQuizIndex
			};
		});
	};

	const prevQuiz = () => {
		update((game) => {
			let currentQuizIndex = game.currentQuizIndex;
			if (currentQuizIndex > 0) {
				currentQuizIndex = currentQuizIndex - 1;
			}
			return {
				quizzes: game.quizzes,
				currentQuizIndex
			};
		});
	};

	const addChar = (char: Char) => {
		update((game) => {
			const currentQuizIndex = game.currentQuizIndex;
			const maxLength = game.quizzes[currentQuizIndex].wordLength;
			if (game.quizzes[currentQuizIndex].currentGuess.length < maxLength) {
				game.quizzes[currentQuizIndex].currentGuess.push(char);
			}
			return game;
		});
	};

	const removeChar = () => {
		update((game) => {
			const currentQuizIndex = game.currentQuizIndex;
			if (game.quizzes[currentQuizIndex].currentGuess.length > 0) {
				game.quizzes[currentQuizIndex].currentGuess.pop();
			}
			return game;
		});
	};

	const makeGuess = (guess: Char[]) => {
		update((game) => {
			const currentQuizIndex = game.currentQuizIndex;
			const currentSolution = game.quizzes[currentQuizIndex].answer;
			const statuses = tryGuess(guess, currentSolution);
			game.quizzes[currentQuizIndex].guesses.push({ guess, statuses });
			return game;
		});
	};

	return {
		subscribe,
		nextQuiz,
		prevQuiz,
		addChar,
		removeChar
	};
};

export const game: gameStore = createGameStore();

type quizStore = {
	subscribe: Readable<Quiz>['subscribe'];
	addChar: (char: Char) => void;
	removeChar: () => void;
};

const createCurrentQuizStore = () => {
	const { subscribe } = derived<gameStore, Quiz>(game, (game, set) => {
		const index = game.currentQuizIndex;
		const quiz = game.quizzes[index];
		set(quiz);
	});

	const addChar = game.addChar;
	const removeChar = game.removeChar;

	return {
		subscribe,
		addChar,
		removeChar
	};
};

export const currentQuiz: quizStore = createCurrentQuizStore();

type guessStore = {
	subscribe: Readable<Char[]>['subscribe'];
	addChar: (char: Char) => void;
	removeChar: () => void;
};

const createCurrentGuessStore = () => {
	const { subscribe } = derived<quizStore, Char[]>(currentQuiz, (quiz, set) => {
		set(quiz.currentGuess);
	});

	const addChar = currentQuiz.addChar;
	const removeChar = currentQuiz.removeChar;

	return {
		subscribe,
		addChar,
		removeChar
	};
};

export const currentGuess: guessStore = createCurrentGuessStore();
