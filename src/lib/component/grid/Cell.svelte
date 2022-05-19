<script lang="ts">
	import type { Char, CharStatus } from '$lib/type';
	import { transparentModeOption } from '$lib/store/config';

	export let animationDuration = 0.5;
	export let animationDelay = 0;

	export let char: Char | undefined = undefined;
	export let status: CharStatus | undefined = undefined;

	const transparentMode = transparentModeOption.option;
</script>

<div
	class="cell"
	class:empty={char === undefined}
	class:char-input={char !== undefined && status === undefined}
	class:checked={status !== undefined}
	class:absent={status === 'absent'}
	class:exist={status === 'exist'}
	class:correct={status === 'correct'}
	class:transparent-mode={$transparentMode}
	style="--duration: {animationDuration}s; --delay: {animationDelay}s;"
>
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
		color: var(--text-color);
		border: 0.1em solid grey;
	}

	div.checked {
		color: var(--checked-text-color);
		border: 0.1em solid transparent;
		animation: reveal var(--duration) linear var(--delay);
		animation-fill-mode: backwards;
	}

	div.absent {
		background-color: var(--absent-color);
	}

	div.exist {
		background-color: var(--exist-color);
	}

	div.correct {
		background-color: var(--correct-color);
	}

	div.transparent-mode {
		color: transparent;
	}

	@keyframes reveal {
		0% {
			transform: rotateX(0deg);
			border: 0.1em solid grey;
			color: var(--text-color);
			background-color: transparent;
		}
		50% {
			transform: rotateX(90deg);
			border: 0.1em solid grey;
			color: var(--text-color);
			background-color: transparent;
		}
		100% {
			transform: rotateX(0deg);
		}
	}
</style>
