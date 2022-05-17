<script lang="ts">
	import type { Char, CharStatus } from '$lib/types';

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
		color: white;
	}

	div.absent {
		background-color: grey;
	}

	div.exist {
		background-color: rgb(164, 167, 34);
	}

	div.correct {
		background-color: rgb(73, 163, 38);
	}
</style>
