import type { Writable } from 'svelte/store';
import { derived, get, writable } from 'svelte/store';

export const masterIsModalOpen = writable(false);

export const createModalIsOpenStorage = () => {
	const individualIsModalOpen = writable(false);

	const isOpen = derived<Writable<boolean>[], boolean>(
		[masterIsModalOpen, individualIsModalOpen],
		(values, set) => {
			const masterIsOpen = values[0];
			const individualIsOpen = values[1];
			if (masterIsOpen) {
				set(individualIsOpen);
			} else {
				individualIsModalOpen.set(false);
				set(false);
			}
		}
	);

	const toggleOn = () => {
		if (!get(masterIsModalOpen)) {
			masterIsModalOpen.set(true);
			individualIsModalOpen.set(true);
		}
	};

	const toggleOff = () => {
		if (get(individualIsModalOpen)) {
			individualIsModalOpen.set(false);
			masterIsModalOpen.set(false);
		}
	};

	return {
		isOpen,
		toggleOn,
		toggleOff
	};
};

export const toggleOpenedModalOff = () => {
	masterIsModalOpen.set(false);
};
