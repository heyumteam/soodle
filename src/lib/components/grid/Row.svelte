<script lang="ts">
	import type { Char, CharStatus } from '$lib/types';
	import Cell from './Cell.svelte';
	import { currentQuiz } from '$lib/storages/game';

	export let guess: Char[] = [];
	export let charStatuses: CharStatus[] = [];
	$: emptyTiles = new Array(Math.max($currentQuiz.wordLength - guess.length, 0)).fill(undefined);
</script>

<div class="row">
	{#each guess as char, i}
		<Cell {char} status={charStatuses[i]} />
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
