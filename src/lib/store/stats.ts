import type { Stats } from '$lib/type';
import { MAX_TRIAL } from '$lib/config';
import { getTodayString } from '$lib/util/date';
import { writable } from 'svelte/store';

const createStatsStore = () => {
	const createNewStats = () => ({
		lastSubmitted: undefined,
		played: 0,
		winCount: 0,
		visitStroke: 0,
		totalVisits: 0,
		guessDistribution: new Array(MAX_TRIAL).fill(0)
	});

	const { subscribe, update } = writable<Stats>(createNewStats());

	const load = (stats: Stats) => {
		update(() => stats);
	};

	const markSubmitted = () => {
		update((stats) => {
			const today = getTodayString();
			if (stats.lastSubmitted !== today) {
				stats.visitStroke += 1;
				stats.totalVisits += 1;
				stats.lastSubmitted = today;
			}
			return stats;
		});
	};

	const markGameDone = (won: boolean, attempts: number) => {
		update((stats) => {
			stats.played += 1;
			if (won) {
				stats.winCount += 1;
				stats.guessDistribution[attempts - 1] += 1;
			}
			return stats;
		});
	};

	const reset = () => {
		update(() => createNewStats());
	}

	return {
		subscribe,
		load,
		markSubmitted,
		markGameDone,
		reset
	};
};

export const stats = createStatsStore();
