<script lang="ts">
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';
	import { currentQuiz } from '$lib/storages/game';
	import { currentGuess } from '$lib/storages/game';

	$: emptyRows = new Array(Math.max(MAX_TRIAL - 1 - $currentQuiz.guesses.length, 0)).fill(
		undefined
	);
</script>

<div>
	{#each $currentQuiz.guesses as guess}
		<Row guess={guess.guess} charStatuses={guess.statuses} />
	{/each}
	<Row guess={$currentGuess} />
	{#each emptyRows as _}
		<Row />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
