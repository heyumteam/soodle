<script lang="ts">
	import type { Char, CharStatus } from '$lib/type';
	import { transparentModeOption } from '$lib/store/config';

	export let animationDuration = 0.5;
	export let animationDelay = 0;

	export let char: Char | undefined = undefined;
	export let status: CharStatus | undefined = undefined;

	export let isInCorrectRow: boolean = false;
	export let popDelay: number = 0;

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
	class:not-in-correct-row={!isInCorrectRow}
	class:in-correct-row={isInCorrectRow}
	style="--duration: {animationDuration}s; 
		--delay: {animationDelay}s;
		--pop-delay: {popDelay + animationDelay}s;
		--text-in-cell-color: {$transparentMode ? 'transparent' : 'var(--text-color)'};
		--text-in-checked-cell-color: {$transparentMode ? 'transparent' : 'var(--checked-text-color)'}"
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
		color: var(--text-in-cell-color);
		border: 0.1em solid grey;
	}

	div.checked {
		color: var(--text-in-checked-cell-color);
		border: 0.1em solid transparent;
	}

	div.checked.not-in-correct-row {
		animation: reveal var(--duration) linear var(--delay);
		animation-fill-mode: backwards;
	}

	div.checked.in-correct-row {
		animation: reveal var(--duration) linear var(--delay),
			pop var(--duration) linear var(--pop-delay);
		animation-fill-mode: backwards, none;
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
			color: var(--text-in-cell-color);
			background-color: transparent;
		}
		50% {
			transform: rotateX(90deg);
			border: 0.1em solid grey;
			color: var(--text-in-cell-color);
			background-color: transparent;
		}
		100% {
			transform: rotateX(0deg);
		}
	}

	@keyframes pop {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-1em);
		}
	}
</style>
