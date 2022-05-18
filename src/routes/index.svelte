<script lang="ts">
	import type { Char } from '$lib/type';
	import Grid from '$lib/component/grid/Grid.svelte';
	import Keyboard from '$lib/component/keyboard/Keyboard.svelte';
	import ArrowButton from '$lib/component/ArrowButton.svelte';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import { toast } from '$lib/store/toast';
	import { currentGuess, currentQuiz, game } from '$lib/store/game';
	import { masterIsModalOpen, toggleOpenedModalOff } from '$lib/store/modal';
	import { isInWordList } from '$lib/secret/word';
	import { loadGame, saveGame } from '$lib/storage/local';

	const submit = () => {
		// if current guess is too short
		if ($currentGuess.length < $currentQuiz.wordLength) {
			toast.send('단어가 너무 짧아요');
			return;
		}
		// if current guess is not in word dictionary
		if (!isInWordList($currentGuess)) {
			toast.send('사전에 없는 단어에요');
			return;
		}
		// make guess
		currentQuiz.makeGuess();
		// store result
		saveGame();
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
		loadGame();
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
