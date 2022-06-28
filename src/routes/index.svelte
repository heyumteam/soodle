<script lang="ts">
	import type { Char } from '$lib/type';
	import Grid from '$lib/component/grid/Grid.svelte';
	import Keyboard from '$lib/component/keyboard/Keyboard.svelte';
	import ArrowButton from '$lib/component/ArrowButton.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import { game } from '$lib/store/game';
	import { masterIsModalOpen, toggleOpenedModalOff } from '$lib/store/modal';
	import { loadGame, saveGame } from '$lib/storage/local';
	import { stats } from '$lib/store/stats';
	import { get } from 'svelte/store';
	import { toast } from '$lib/store/toast';

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

	let isGameCreated = false;
	onMount(() => {
		loadGame();
		window.addEventListener('keydown', onKeyDown);
		if (get(stats).lastSubmitted === undefined) {
			toast.send('수들에 오신 것을 환영합니다!');
		}
		setTimeout(() => {
			isGameCreated = true;
		}, 10);
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
	{#if isGameCreated}
		<div class="grid-section">
			<ArrowButton onclick={game.prevQuiz}>
				<ChevronLeft slot="display" size={32} />
			</ArrowButton>
			{#each $game.quizzes as quiz (quiz.id)}
				{#if quiz.id === $game.currentQuizIndex}
					<div id="capture">
						<Grid {quiz} currentGuess={quiz.currentGuess} />
					</div>
				{/if}
			{/each}
			<ArrowButton onclick={game.nextQuiz}>
				<ChevronRight slot="display" size={32} />
			</ArrowButton>
		</div>
		<Keyboard
			knownChars={$game.quizzes[$game.currentQuizIndex].knownChars}
			addChar={game.addChar}
			onEnter={submit}
			onDelete={game.removeChar}
		/>
	{/if}
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
