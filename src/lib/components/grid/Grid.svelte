<script lang="ts">
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';
	import { currentGuess } from '$lib/storages/game';

	$: emptyRows = new Array(Math.max(MAX_TRIAL - 1, 0)).fill(undefined);
</script>

<div>
	<Row guess={$currentGuess} />
	{#each emptyRows as _}
		<Row />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
