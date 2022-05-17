<script lang="ts">
	import type { Char } from '$lib/types';
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import ArrowButton from '$lib/components/ArrowButton.svelte';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import { toasts } from '$lib/storages/toast';
	import { currentGuess, currentQuiz, game } from '$lib/storages/game';
	import { masterIsModalOpen, toggleOpenedModalOff } from '$lib/storages/modal';
	import { isInWordsList } from '$lib/secrets/words';

	const submit = () => {
		// if current guess is too short
		if ($currentGuess.length < $currentQuiz.wordLength) {
			toasts.send('단어가 너무 짧아요');
			return;
		}
		// if current guess is not in word dictionary
		if (!isInWordsList($currentGuess)) {
			toasts.send('사전에 없는 단어에요');
			return;
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		const key = e.key.toUpperCase();
		if ($masterIsModalOpen) {
			if (key == 'ESCAPE') {
				toggleOpenedModalOff();
			}
		} else {
			if (key == 'ARROWLEFT') {
				game.prevQuiz();
			} else if (key == 'ARROWRIGHT') {
				game.nextQuiz();
			} else if (key == 'ENTER' || key == 'RETURN') {
				submit();
			} else if (key == 'DELETE' || key == 'BACKSPACE') {
				currentGuess.removeChar();
			} else if (key.length === 1 && key >= 'A' && key <= 'Z') {
				currentGuess.addChar(key as Char);
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
	<Keyboard onEnter={submit} />
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
