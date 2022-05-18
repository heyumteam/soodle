import type { StoredGame } from '$lib/type';
import { game } from '$lib/store/game';
import { getTodayString } from '$lib/util/date';
import { get } from 'svelte/store';

const gameKey = 'game';

export const saveGame = () => {
	const gameObject = get(game);
	const quizzes = gameObject.quizzes.map((quiz) => {
		return { guesses: quiz.guesses.map((guess) => guess.guess) };
	});
	const gameJson: StoredGame = {
		day: getTodayString(),
		quizzes
	};
	localStorage.setItem(gameKey, JSON.stringify(gameJson));
};

export const loadGame = () => {
	const gameJson = localStorage.getItem(gameKey);
	// if no stored result
	if (!gameJson) {
		return;
	}
	const gameObject: StoredGame = JSON.parse(gameJson);
	// if not todays storage
	if (gameObject.day !== getTodayString()) {
		return;
	}
	// load
	game.moveToQuiz(0);
	gameObject.quizzes.forEach((quiz) => {
		quiz.guesses.forEach((guess) => {
			guess.forEach((char) => game.addChar(char));
			game.makeGuess();
		});
		game.nextQuiz();
	});
	game.moveToQuiz(0);
};

export const resetStorages = () => {
	localStorage.removeItem(gameKey);
};
