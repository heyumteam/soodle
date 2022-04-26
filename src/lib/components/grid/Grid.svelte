<script>
	import { MAX_TRIAL } from '$lib/config';
	import Row from './Row.svelte';

	const emptyTiles = new Array(MAX_TRIAL).fill(undefined);
</script>

<div>
	{#each emptyTiles as _}
		<Row />
	{/each}
</div>
