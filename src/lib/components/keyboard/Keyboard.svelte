<script lang="ts">
	import type { Char } from '$lib/types';
	import Key from './Key.svelte';
	import {
		FIRST_ROW_CHARS,
		SECOND_ROW_CHARS,
		THIRD_ROW_CHARS,
		ENTER_STRING,
		DELETE_STRING
	} from './chars';

	export let onChar: (char: Char) => void;
	export let onEnter: () => void;
	export let onDelete: () => void;
</script>

<div class="keyboard">
	<div class="row">
		{#each FIRST_ROW_CHARS as char}
			<Key {char} onCharKeyClick={onChar} />
		{/each}
	</div>
	<div class="row">
		{#each SECOND_ROW_CHARS as char}
			<Key {char} onCharKeyClick={onChar} />
		{/each}
	</div>
	<div class="row">
		<Key char={ENTER_STRING} onSpecialKeyClick={onEnter} />
		{#each THIRD_ROW_CHARS as char}
			<Key {char} onCharKeyClick={onChar} />
		{/each}
		<Key char={DELETE_STRING} onSpecialKeyClick={onDelete} />
	</div>
</div>

<style>
	div.keyboard {
		display: flex;
		flex-direction: column;
	}
	div.row {
		display: flex;
		justify-content: center;
	}
</style>
