<script lang="ts">
	import type { Char } from '$lib/type';
	import { transparentModeOption } from '$lib/store/config';
	import Result from '$lib/component/modal/Result.svelte';
	export let id: number;
	export let knownAnswer: (Char | undefined)[];

	export let showResult: boolean = false;

	const transparentMode = transparentModeOption.option;
</script>

<div class="container">
	<div class="text">{id}:</div>
	{#each knownAnswer as char}
		<div class="text sheet" class:transparent-mode={$transparentMode}>{char ?? ''}</div>
	{/each}
	<div class="modal-container">
		<Result {showResult} />
	</div>
</div>

<style>
	div.container {
		display: flex;
		align-items: center;
	}

	div.text {
		display: flex;
		justify-content: center;
		color: var(--text-color);
		font-size: x-large;
		margin: 0.2em 0.1em;
		height: 1.4em;
	}

	div.sheet {
		width: 1em;
		border-bottom: 0.1em solid black;
	}

	div.transparent-mode {
		color: transparent;
	}

	div.modal-container {
		display: flex;
		align-items: center;
	}
</style>
