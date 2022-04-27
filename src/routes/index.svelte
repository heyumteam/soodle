<script lang="ts">
	import type { Char } from '$lib/types';
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { WORD_LENGTH } from '$lib/config';

	let currentGuess: Char[] = [];

	const onChar = (char: Char) => {
		if (currentGuess.length < WORD_LENGTH) {
			currentGuess.push(char);
			currentGuess = currentGuess;
		}
	};

	const onDelete = () => {
		if (currentGuess.length > 0) {
			currentGuess.pop();
			currentGuess = currentGuess;
		}
	};
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<Grid {currentGuess} />
	<Keyboard {onChar} {onDelete} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-top: 2em;
		flex-grow: 1;
	}
</style>
