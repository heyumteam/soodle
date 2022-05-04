<script lang="ts">
	import type { Char, SpecialKey } from '$lib/types';

	export let char: Char | SpecialKey;
	export let onClick: () => void;
</script>

<button class="key" on:click={(e) => onClick()}>
	{char}
</button>

<style>
	button.key {
		display: flex;
		background-color: lightgrey;
		height: 3.3em;
		min-width: 2.5em;
		justify-content: center;
		align-items: center;
		border-radius: 10%;
		border: 0;
		margin: 0.2em;
		font-size: large;
		font-weight: 600;
		padding: 0 0.8em;
		cursor: pointer;
	}

	button.key:hover {
		opacity: 0.5;
	}
</style>
