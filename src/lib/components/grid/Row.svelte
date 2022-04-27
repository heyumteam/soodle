<script lang="ts">
	import type { Char } from '$lib/types';
	import { WORD_LENGTH } from '$lib/config';
	import Cell from './Cell.svelte';

	export let guess: Char[] = [];
	$: emptyTiles = new Array(Math.max(WORD_LENGTH - guess.length, 0)).fill(undefined);
</script>

<div class="row">
	{#each guess as char}
		<Cell {char} />
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
