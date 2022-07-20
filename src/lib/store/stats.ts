import type { Stats } from '$lib/type';
import { MAX_TRIAL, NUM_WORDS } from '$lib/config';
import { getTodayString } from '$lib/util/date';
import { derived, writable } from 'svelte/store';

const createStatsStore = () => {
	const createNewStats = () => {
		return {
			lastSubmitted: undefined,
			played: 0,
			winCount: 0,
			visitStroke: 0,
			totalVisits: 0,
			guessDistribution: new Array(MAX_TRIAL).fill(0),
			todayPlayed: new Array(NUM_WORDS).fill(false),
			todayFinished: new Array(NUM_WORDS).fill(false)
		};
	};

	const { subscribe, update } = writable<Stats>(createNewStats());

	const load = (stats: Stats) => {
		update(() => {
			const today = getTodayString();
			if (stats.lastSubmitted !== today) {
				stats.todayPlayed = new Array(NUM_WORDS).fill(false);
				stats.todayFinished = new Array(NUM_WORDS).fill(false);
				if (
					stats.lastSubmitted !== undefined &&
					(new Date(getTodayString()).getTime() - new Date(stats.lastSubmitted).getTime()) / 86400000 > 1
				) {
					stats.visitStroke = 0;
				}
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

	const markGameDone = (index: number, won: boolean, attempts: number) => {
		update((stats) => {
			if (!stats.todayFinished[index]) {
				stats.todayFinished[index] = true;
				if (won) {
					stats.winCount += 1;
					stats.guessDistribution[attempts - 1] += 1;
				}
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

export const maxDistributionCount = derived(stats, ($stats) => {
	return Math.max.apply(null, $stats.guessDistribution);
});
