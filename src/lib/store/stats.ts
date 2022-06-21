import type { Stats } from '$lib/type';
import { MAX_TRIAL } from '$lib/config';
import { getTodayString } from '$lib/util/date';
import { writable } from 'svelte/store';

const createStatsStore = () => {
	const { subscribe, update } = writable<Stats>({
		lastSubmitted: undefined,
		played: 0,
		winCount: 0,
		visitStroke: 0,
		totalVisits: 0,
		guessDistribution: new Array(MAX_TRIAL).fill(0)
	});

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
				stats.guessDistribution[attempts] += 1;
			}
			return stats;
		});
	};

	return {
		subscribe,
		load,
		markSubmitted,
		markGameDone
	};
};

export const stats = createStatsStore();
