import { get, writable } from 'svelte/store';

export const masterIsModalOpen = writable(false);

export const createModalIsOpenStorage = () => {
	const individualIsModalOpen = writable(false);

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
		isOpen: individualIsModalOpen,
		toggleOn,
		toggleOff
	};
};
