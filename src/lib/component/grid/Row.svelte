<script lang="ts">
	import type { Char, CharStatus } from '$lib/type';
	import Cell from './Cell.svelte';
	import { FLIP_ANIMATION_DURATION, FLIP_ANIMATION_DELAY_PER_CELL } from '$lib/config';

	export let wordLength: number;
	export let guess: Char[] = [];
	export let charStatuses: (CharStatus | undefined)[] = [];

	$: emptyTiles = new Array(Math.max(wordLength - guess.length, 0)).fill(undefined);
	$: popDelay = wordLength * FLIP_ANIMATION_DELAY_PER_CELL;
	$: isCorrectRow =
		charStatuses.length === wordLength && charStatuses.every((status) => status === 'correct');
</script>

<div class="row">
	{#each guess as char, i}
		<Cell
			{char}
			status={charStatuses[i]}
			animationDuration={FLIP_ANIMATION_DURATION}
			animationDelay={FLIP_ANIMATION_DELAY_PER_CELL * i}
			isInCorrectRow={isCorrectRow}
			{popDelay}
		/>
	{/each}
	{#each emptyTiles as _}
		<Cell />
	{/each}
</div>

<style>
	div.row {
		display: flex;
	}
</style>
