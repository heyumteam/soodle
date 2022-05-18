<script lang="ts">
	import type { Char, CharStatus } from '$lib/type';

	export let animationDuration = 0.5;
	export let animationDelay = 0;

	export let char: Char | undefined = undefined;
	export let status: CharStatus | undefined = undefined;
</script>

<div
	class="cell"
	class:empty={char === undefined}
	class:char-input={char !== undefined && status === undefined}
	class:checked={status !== undefined}
	class:absent={status === 'absent'}
	class:exist={status === 'exist'}
	class:correct={status === 'correct'}
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
		border: 0.1em solid grey;
	}

	div.checked {
		border: 0.1em solid transparent;
		color: var(--checked-text-color);
		animation: rotate var(--duration) linear var(--delay);
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

	@keyframes rotate {
		from {
			transform: rotateX(-180deg);
		}
		to {
			transform: rotateX(0deg);
		}
	}
</style>
