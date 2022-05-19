<script lang="ts">
	import type { Char, Quiz } from '$lib/type';
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';
	import Answer from './Answer.svelte';

	export let quiz: Quiz;
	export let currentGuess: Char[] = [];

	$: emptyRows = new Array(Math.max(MAX_TRIAL - 1 - quiz.guesses.length, 0)).fill(undefined);
</script>

<div>
	<Answer id={quiz.id + 1} knownAnswer={quiz.knownAnsers} />
	{#each quiz.guesses as guess}
		<Row wordLength={quiz.wordLength} guess={guess.guess} charStatuses={guess.statuses} />
	{/each}
	<Row wordLength={quiz.wordLength} guess={currentGuess} />
	{#each emptyRows as _}
		<Row wordLength={quiz.wordLength} />
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
