import type { StoredGame, Stats } from '$lib/type';
import { GAME_KEY, STATS_KEY } from '$lib/config';
import { game } from '$lib/store/game';
import { stats } from '$lib/store/stats';
import { getTodayString } from '$lib/util/date';
import { get } from 'svelte/store';

export const saveGame = () => {
	const gameObject = get(game);
	const quizzes = gameObject.quizzes.map((quiz) => {
		return { guesses: quiz.guesses.map((guess) => guess.guess) };
	});
	const gameJson: StoredGame = {
		day: getTodayString(),
		quizzes
	};
	localStorage.setItem(GAME_KEY, JSON.stringify(gameJson));
};

export const loadGame = () => {
	// load
	const statsString = localStorage.getItem(STATS_KEY);
	if (statsString) {
		const loadedStats = JSON.parse(statsString);
		stats.load(loadedStats as Stats);
	}

	// load game
	const gameJson = localStorage.getItem(GAME_KEY);
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

export const resetStorage = () => {
	localStorage.removeItem(GAME_KEY);
	localStorage.removeItem(STATS_KEY);
};
