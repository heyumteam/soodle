<script>
	import { WORD_LENGTH } from '../config';
	import Cell from './Cell.svelte';

	const emptyTiles = new Array(WORD_LENGTH).fill(undefined);
</script>

<div class="row">
	{#each emptyTiles as _}
		<Cell />
	{/each}
</div>

<style>
	div.row {
		display: flex;
	}
</style>
