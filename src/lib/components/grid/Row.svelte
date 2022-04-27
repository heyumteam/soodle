<script lang='ts'>
	import type { Chars } from '$lib/types';
	import { WORD_LENGTH } from '$lib/config';
	import Cell from './Cell.svelte';

	export let guess: Chars[] = [];
	const emptyTiles = new Array(WORD_LENGTH - guess.length).fill(undefined);
</script>

<div class="row">
	{#each guess as char}
		<Cell {char}/>
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
