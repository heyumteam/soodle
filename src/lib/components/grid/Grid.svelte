<script lang='ts'>
	import type { Chars } from '$lib/types';
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';

	export let currentGuess: Chars[];
	const emptyTiles = new Array(MAX_TRIAL - 1).fill(undefined);
</script>

<div>
	<Row guess={currentGuess} />
	{#each emptyTiles as _}
		<Row />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
