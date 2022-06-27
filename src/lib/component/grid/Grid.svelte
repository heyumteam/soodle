<script lang="ts">
	import type { Char, Quiz } from '$lib/type';
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';
	import Answer from './Answer.svelte';

	export let quiz: Quiz;
	export let currentGuess: Char[] = [];

	$: emptyRows = new Array(Math.max(MAX_TRIAL - quiz.guesses.length, 0))
		.fill(currentGuess, 0, 1)
		.fill([], 1);
</script>

<div>
	<Answer id={quiz.id + 1} knownAnswer={quiz.knownAnswers} showResult={quiz.isEnd} />
	{#each quiz.guesses as guess}
		<Row wordLength={quiz.wordLength} guess={guess.guess} charStatuses={guess.statuses} />
	{/each}
	{#each emptyRows as row}
		<Row wordLength={quiz.wordLength} guess={row} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
