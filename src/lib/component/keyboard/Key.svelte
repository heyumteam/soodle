<script lang="ts">
	import type { Char, CharStatus, SpecialKey } from '$lib/type';

	export let char: Char | SpecialKey;
	export let charStatus: CharStatus | undefined = undefined;
	export let onClick: () => void;
</script>

<button
	class="key"
	on:click={() => onClick()}
	class:unknown={charStatus === undefined}
	class:absent={charStatus === 'absent'}
	class:exist={charStatus === 'exist'}
	class:correct={charStatus === 'correct'}
>
	{char}
</button>

<style>
	button.key {
		display: flex;
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
		color: black;
	}

	button.key:hover {
		opacity: 0.5;
	}

	button.unknown {
		background-color: var(--unknown-keyboard-color);
	}

	button.absent {
		color: var(--checked-text-color);
		background-color: var(--absent-color);
	}

	button.exist {
		color: var(--checked-text-color);
		background-color: var(--exist-color);
	}

	button.correct {
		color: var(--checked-text-color);
		background-color: var(--correct-color);
	}
</style>
