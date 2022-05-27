import type { Char, CharStatus, Game, Guess, Quiz } from '$lib/type';
import { writable } from 'svelte/store';
import { getTodaysAnswers } from '$lib/secret/dictionary';
import { tryGuess } from '$lib/secret/dictionary';
import { isInVocabList } from '$lib/secret/vocab';
import { toast } from '$lib/store/toast';
import { MAX_TRIAL } from '$lib/config';

const createGameStore = () => {
	const createQuiz = (id: number, answer: string): Quiz => {
		const isEnd = false;
		const wordLength = answer.length;
		const guesses: Guess[] = [];
		const currentGuess: Char[] = [];
		const knownAnsers: (Char | undefined)[] = new Array(wordLength).fill(undefined);
		const knownChars: { [char in Char]?: CharStatus } = {};
		return {
			id,
			isEnd,
			answer,
			wordLength,
			guesses,
			currentGuess,
			knownAnsers,
			knownChars
		};
	};

	const createGame = () => {
		const answers = getTodaysAnswers();
		const quizzes = answers.map((answer, i) => createQuiz(i, answer));
		return {
			quizzes,
			currentQuizIndex: 0
		};
	};

	const { subscribe, update } = writable<Game>(createGame());

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

	const moveToQuiz = (index: number) => {
		update((game) => {
			game.currentQuizIndex = index;
			return game;
		});
	};

	const addChar = (char: Char) => {
		update((game) => {
			const currentQuizIndex = game.currentQuizIndex;
			const maxLength = game.quizzes[currentQuizIndex].wordLength;
			if (!game.quizzes[currentQuizIndex].isEnd) {
				if (game.quizzes[currentQuizIndex].currentGuess.length < maxLength) {
					game.quizzes[currentQuizIndex].currentGuess.push(char);
				}
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
			const currentQuizIndex = game.currentQuizIndex;
			const currentQuiz = game.quizzes[currentQuizIndex];
			const currentGuess = currentQuiz.currentGuess;
			if (!currentQuiz.isEnd) {
				// if current guess is too short
				if (currentGuess.length < currentQuiz.wordLength) {
					toast.send('단어가 너무 짧아요');
					return game;
				}
				// if current guess is not in word dictionary
				if (!isInVocabList(currentGuess)) {
					toast.send('사전에 없는 단어에요');
					return game;
				}
				// make guess
				const currentSolution = game.quizzes[currentQuizIndex].answer;
				const statuses = tryGuess(currentGuess, currentSolution);
				game.quizzes[currentQuizIndex].guesses.push({ guess: currentGuess, statuses });
				game.quizzes[currentQuizIndex].currentGuess = [];
				// is quiz end
				game.quizzes[currentQuizIndex].isEnd =
					game.quizzes[currentQuizIndex].guesses.length >= MAX_TRIAL ||
					statuses.every((status) => status === 'correct');
				// update known chars
				currentGuess.forEach((char, i) => {
					const status = statuses[i];
					if (status === 'correct' || game.quizzes[currentQuizIndex].isEnd) {
						game.quizzes[currentQuizIndex].knownAnsers[i] = game.quizzes[currentQuizIndex].answer[
							i
						].toUpperCase() as Char;
					}
					const knownStatus = game.quizzes[currentQuizIndex].knownChars[char];
					if (knownStatus === undefined || (knownStatus === 'exist' && status === 'correct')) {
						game.quizzes[currentQuizIndex].knownChars[char] = status;
					}
				});
			}
			return game;
		});
	};

	const reset = () => {
		update(() => createGame());
	};

	return {
		subscribe,
		nextQuiz,
		prevQuiz,
		moveToQuiz,
		addChar,
		removeChar,
		makeGuess,
		reset
	};
};

export const game = createGameStore();
