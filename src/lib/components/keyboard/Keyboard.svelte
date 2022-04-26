<script lang="ts">
	import Key from './Key.svelte';
	import { FIRST_ROW_CHARS, SECOND_ROW_CHARS, THIRD_ROW_CHARS, ENTER_STRING, DELETE_STRING } from './chars';
</script>

<div class="keyboard">
	<div class="row">
		{#each FIRST_ROW_CHARS as char}
			<Key {char} />
		{/each}
	</div>
	<div class="row">
		{#each SECOND_ROW_CHARS as char}
			<Key {char} />
		{/each}
	</div>
	<div class="row">
        <Key char={ENTER_STRING} />
		{#each THIRD_ROW_CHARS as char}
			<Key {char} />
		{/each}
        <Key char={DELETE_STRING} />
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
