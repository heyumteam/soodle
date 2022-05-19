<script lang="ts">
	import Key from './Key.svelte';
	import {
		FIRST_ROW_CHARS,
		SECOND_ROW_CHARS,
		THIRD_ROW_CHARS,
		ENTER_STRING,
		DELETE_STRING
	} from './chars';
	import type { Char, CharStatus } from '$lib/type';

	export let knownChars: { [char in Char]?: CharStatus };
	export let addChar: (char: Char) => void;
	export let onEnter: () => void;
	export let onDelete: () => void;
</script>

<div class="keyboard">
	<div class="row">
		{#each FIRST_ROW_CHARS as char}
			<Key {char} charStatus={knownChars[char]} onClick={() => addChar(char)} />
		{/each}
	</div>
	<div class="row">
		{#each SECOND_ROW_CHARS as char}
			<Key {char} charStatus={knownChars[char]} onClick={() => addChar(char)} />
		{/each}
	</div>
	<div class="row">
		<Key char={ENTER_STRING} onClick={onEnter} />
		{#each THIRD_ROW_CHARS as char}
			<Key {char} charStatus={knownChars[char]} onClick={() => addChar(char)} />
		{/each}
		<Key char={DELETE_STRING} onClick={onDelete} />
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
