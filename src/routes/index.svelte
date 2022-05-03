<script lang="ts">
	import type { Char } from '$lib/types';
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { WORD_LENGTH } from '$lib/config';
	import { toasts } from '$lib/storages/toast';
	import { currentGuess } from '$lib/storages/game';

	const onChar = (char: Char) => {
		if ($currentGuess.length < WORD_LENGTH) {
			currentGuess.addChar(char);
		}
	};

	const onEnter = () => {
		if ($currentGuess.length < WORD_LENGTH) {
			toasts.send('단어가 너무 짧아요');
		}
	};

	const onDelete = () => {
		if ($currentGuess.length > 0) {
			currentGuess.removeChar();
		}
	};
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<Grid />
	<Keyboard {onChar} {onEnter} {onDelete} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
	}
</style>
