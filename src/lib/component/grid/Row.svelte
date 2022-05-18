<script lang="ts">
	import type { Char, CharStatus } from '$lib/type';
	import Cell from './Cell.svelte';
	import { currentQuiz } from '$lib/store/game';
	import { FLIP_ANIMATION_DURATION, FLIP_ANIMATION_DELAY_PER_CELL } from '$lib/config';

	export let guess: Char[] = [];
	export let charStatuses: CharStatus[] = [];
	$: emptyTiles = new Array(Math.max($currentQuiz.wordLength - guess.length, 0)).fill(undefined);
</script>

<div class="row">
	{#each guess as char, i}
		<Cell
			{char}
			status={charStatuses[i]}
			animationDuration={FLIP_ANIMATION_DURATION}
			animationDelay={FLIP_ANIMATION_DELAY_PER_CELL * i}
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
