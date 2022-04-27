<script lang="ts">
	import type { Chars, SpecialKeys, KeyStatus } from '$lib/types';
	import { ALL_CHARS, ALL_SPECIAL_KEYS } from './chars';

	// let status: KeyStatus = 'unknown';
	export let char: Chars | SpecialKeys;

	export let onCharKeyClick: (char: Chars) => void = (char) => {};
	export let onSpecialKeyClick: () => void = () => {};
	const onClick = (e: MouseEvent) => {
		if (ALL_CHARS.includes(char as Chars)) {
			onCharKeyClick(char as Chars);
		}
		else if (ALL_SPECIAL_KEYS.includes(char as SpecialKeys)) {
			onSpecialKeyClick();
		}
	};
</script>

<button class="key" on:click={onClick}>
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
