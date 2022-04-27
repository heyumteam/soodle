<script lang="ts">
	import type { Chars, SpecialKeys, KeyStatus } from '$lib/types';

	let status: KeyStatus = 'unknown';
	export let char: Chars | SpecialKeys;
</script>

<button class="key">
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
	}
</style>
