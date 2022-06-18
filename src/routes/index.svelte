<script lang="ts">
	import type { Char } from '$lib/type';
	import Grid from '$lib/component/grid/Grid.svelte';
	import Keyboard from '$lib/component/keyboard/Keyboard.svelte';
	import ArrowButton from '$lib/component/ArrowButton.svelte';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import { game } from '$lib/store/game';
	import { masterIsModalOpen, toggleOpenedModalOff } from '$lib/store/modal';
	import { loadGame, saveGame } from '$lib/storage/local';

	const submit = () => {
		game.makeGuess();
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
				game.removeChar();
			} else if (key.length === 1 && key >= 'A' && key <= 'Z') {
				game.addChar(key as Char);
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
		{#each $game.quizzes as quiz (quiz.id)}
			{#if quiz.id === $game.currentQuizIndex}
				<div id="capture">
					<Grid {quiz} currentGuess={quiz.currentGuess} />
				</div>
			{/if}
		{/each}
		<ArrowButton char={'▶'} onclick={game.nextQuiz} />
	</div>
	<Keyboard
		knownChars={$game.quizzes[$game.currentQuizIndex].knownChars}
		addChar={game.addChar}
		onEnter={submit}
		onDelete={game.removeChar}
	/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
		min-width: fit-content;
	}

	div.grid-section {
		display: flex;
		align-items: center;
		flex-grow: 1;
	}
</style>
