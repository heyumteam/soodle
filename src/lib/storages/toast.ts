import type {Toast } from '$lib/types';
import { writable } from 'svelte/store';
import { TOAST_TIMEOUT } from '$lib/config';

const id = () => {
	return Math.random().toString(16).substring(2);
}

const createToastStore = () => {
	const { update, subscribe } = writable<Toast[]>([]);

	const send = (message: string) => {
		update((state: Toast[]) => {
			return [...state, {id: id(), message}];
		});
		setTimeout(() => {
			update((state) => {
				state.shift();
				return state;
			});
		}, TOAST_TIMEOUT);
	};

	return {
		subscribe,
		send
	};
};

export const toasts = createToastStore();
