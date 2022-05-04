<script lang="ts">
	import type { Char } from '$lib/types';

	export let char: Char | undefined = undefined;
</script>

<div class="cell" class:empty={char === undefined} class:char-input={char !== undefined}>
	{char ?? ''}
</div>

<style>
	div.cell {
		display: flex;
		font-size: x-large;
		font-weight: 700;
		border-radius: 10%;
		width: 2.2em;
		height: 2.2em;
		justify-content: center;
		align-items: center;
		margin: 0.15em;
	}

	div.empty {
		border: 0.1em solid lightgrey;
	}

	div.char-input {
		border: 0.1em solid grey;
	}
</style>
