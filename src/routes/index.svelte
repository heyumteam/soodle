<script lang="ts">
	import type { Char } from '$lib/types';
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import ArrowButton from '$lib/components/ArrowButton.svelte';
	import { toasts } from '$lib/storages/toast';
	import { game, currentGuess, currentQuiz } from '$lib/storages/game';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/env';
	import { masterIsModalOpen } from '$lib/storages/modal';

	const onChar = (char: Char) => {
		currentGuess.addChar(char);
	};

	const onEnter = () => {
		if ($currentGuess.length < $currentQuiz.wordLength) {
			toasts.send('단어가 너무 짧아요');
		}
	};

	const onDelete = () => {
		currentGuess.removeChar();
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (!$masterIsModalOpen) {
			const key = e.key.toUpperCase();
			if (key == 'ARROWLEFT') {
				game.prevQuiz();
			} else if (key == 'ARROWRIGHT') {
				game.nextQuiz();
			} else if (key == 'ENTER' || key == 'RETURN') {
				onEnter();
			} else if (key == 'DELETE' || key == 'BACKSPACE') {
				onDelete();
			} else if (key.length === 1 && key >= 'A' && key <= 'Z') {
				onChar(key as Char);
			}
		}
	};

	onMount(() => {
		window.addEventListener('keydown', onKeyDown);
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', onKeyDown);
		}
	});
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<div class="grid-section">
		<ArrowButton char={'◀'} onclick={game.prevQuiz} />
		<Grid />
		<ArrowButton char={'▶'} onclick={game.nextQuiz} />
	</div>
	<Keyboard {onChar} {onEnter} {onDelete} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
	}

	div.grid-section {
		display: flex;
		align-items: center;
		flex-grow: 1;
	}
</style>
