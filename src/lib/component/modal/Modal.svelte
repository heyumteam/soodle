<script lang="ts">
	import type { Readable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	export let isOpen: Readable<boolean>;
	export let toggleOn: () => void;
	export let toggleOff: () => void;

	const scale = spring(1);
</script>

<button
	class="modal-button"
	on:click={(e) => toggleOn()}
	on:mouseenter={(e) => scale.set(1.2)}
	on:mouseleave={(e) => scale.set(1)}
	style="transform: scale({$scale});"
>
	<slot name="icon" />
</button>

{#if $isOpen}
	<div class="modal-container">
		<div class="modal">
			<div class="close-button-container">
				<button class="close-button" on:click={(e) => toggleOff()}>&times;</button>
			</div>
			<slot name="content" />
		</div>
	</div>
{/if}

<style>
	button.modal-button {
		background-color: transparent;
		padding: 0;
		margin: 0 0.5em;
		border: 0;
		z-index: 10;
		cursor: pointer;
	}

	div.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div.modal {
		background-color: white;
		border-radius: 5%;
		flex-direction: column;
		min-width: 25em;
		padding: 0.5em;
	}

	div.close-button-container {
		display: flex;
		justify-content: end;
	}

	button.close-button {
		border: 0;
		background-color: transparent;
		font-size: x-large;
	}
</style>
