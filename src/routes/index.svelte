<script lang="ts">
	import type { Chars } from '$lib/types';
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { WORD_LENGTH } from '$lib/config';

	let currentGuess: Chars[] = [];

	const onKeyDown = (e: KeyboardEvent) => {
		const key = e.key.toUpperCase();
		if (key == 'DELETE' || key == 'BACKSPACE') {
			if (currentGuess.length > 0) {
				currentGuess.pop();
				currentGuess = currentGuess;
			}
		}
		else if (key.length === 1 && key >= 'A' && key <= 'Z') {
			if (currentGuess.length < WORD_LENGTH) {
				currentGuess.push(key as Chars);
				currentGuess = currentGuess;
			}
		}
	};
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<Grid {currentGuess} />
	<Keyboard {onKeyDown} />
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
