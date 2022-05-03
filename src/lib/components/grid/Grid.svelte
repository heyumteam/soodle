<script lang="ts">
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';
	import { currentGuess } from '$lib/storages/game';

	const emptyTiles = new Array(Math.max(MAX_TRIAL - 1, 0)).fill(undefined);
</script>

<div>
	<Row guess={$currentGuess} />
	{#each emptyTiles as _}
		<Row />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
	}
</style>
