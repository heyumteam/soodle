import type { Readable, Writable } from 'svelte/store';
import type { Char, CharStatus, Game, Guess, Quiz } from '$lib/type';
import { derived, writable } from 'svelte/store';
import { getTodaysAnswers } from '$lib/secret/dictionary';
import { tryGuess } from '$lib/secret/dictionary';

const createQuiz: (answer: string) => Quiz = (answer) => {
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

type gameStore = {
	subscribe: Writable<Game>['subscribe'];
	nextQuiz: () => void;
	prevQuiz: () => void;
	addChar: (char: Char) => void;
	removeChar: () => void;
	makeGuess: () => void;
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

	const makeGuess = () => {
		update((game) => {
			// make guess
			const currentQuizIndex = game.currentQuizIndex;
			const currentSolution = game.quizzes[currentQuizIndex].answer;
			const guess = game.quizzes[currentQuizIndex].currentGuess;
			const statuses = tryGuess(guess, currentSolution);
			game.quizzes[currentQuizIndex].guesses.push({ guess, statuses });
			game.quizzes[currentQuizIndex].currentGuess = [];
			// update known chars
			guess.forEach((char, i) => {
				const status = statuses[i];
				const knownStatus = game.quizzes[currentQuizIndex].knownChars[char];
				if (knownStatus === undefined || (knownStatus === 'exist' && status === 'correct')) {
					game.quizzes[currentQuizIndex].knownChars[char] = status;
				}
			});
			return game;
		});
	};

	return {
		subscribe,
		nextQuiz,
		prevQuiz,
		addChar,
		removeChar,
		makeGuess
	};
};

export const game: gameStore = createGameStore();

type quizStore = {
	subscribe: Readable<Quiz>['subscribe'];
	addChar: (char: Char) => void;
	removeChar: () => void;
	makeGuess: () => void;
};

const createCurrentQuizStore = () => {
	const { subscribe } = derived<gameStore, Quiz>(game, (game, set) => {
		const index = game.currentQuizIndex;
		const quiz = game.quizzes[index];
		set(quiz);
	});

	const addChar = game.addChar;
	const removeChar = game.removeChar;
	const makeGuess = game.makeGuess;

	return {
		subscribe,
		addChar,
		removeChar,
		makeGuess
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
