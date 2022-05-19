import { get, writable } from 'svelte/store';

const createOnOffOption = (d = false) => {
	const optionStorage = writable(d);

	const toggle = () => {
		optionStorage.set(!get(optionStorage));
	};

	const toggleOn = () => {
		optionStorage.set(true);
	};

	const toggleOff = () => {
		optionStorage.set(false);
	};

	return {
		option: optionStorage,
		toggle,
		toggleOn,
		toggleOff
	};
};

export const transparentModeOption = createOnOffOption(false);
