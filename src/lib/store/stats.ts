import type { Stats } from '$lib/type';
import { MAX_TRIAL, NUM_WORDS } from '$lib/config';
import { getTodayString } from '$lib/util/date';
import { writable } from 'svelte/store';

const createStatsStore = () => {
	const createNewStats = () => {
		return {
			lastSubmitted: undefined,
			played: 0,
			winCount: 0,
			visitStroke: 0,
			totalVisits: 0,
			guessDistribution: new Array(MAX_TRIAL).fill(0),
			todayPlayed: new Array(NUM_WORDS).fill(false)
		};
	};

	const { subscribe, update } = writable<Stats>(createNewStats());

	const load = (stats: Stats) => {
		update(() => {
			const today = getTodayString();
			if (stats.lastSubmitted !== today) {
				stats.todayPlayed = new Array(NUM_WORDS).fill(false);
			}
			return stats;
		});
	};

	const markSubmitted = (index: number) => {
		update((stats) => {
			const today = getTodayString();
			if (stats.lastSubmitted !== today) {
				stats.visitStroke += 1;
				stats.totalVisits += 1;
				stats.lastSubmitted = today;
			}
			if (!stats.todayPlayed[index]) {
				stats.played += 1;
				stats.todayPlayed[index] = true;
			}
			return stats;
		});
	};

	const markGameDone = (won: boolean, attempts: number) => {
		update((stats) => {
			if (won) {
				stats.winCount += 1;
				stats.guessDistribution[attempts - 1] += 1;
			}
			return stats;
		});
	};

	const reset = () => {
		update(() => createNewStats());
	};

	return {
		subscribe,
		load,
		markSubmitted,
		markGameDone,
		reset
	};
};

export const stats = createStatsStore();
