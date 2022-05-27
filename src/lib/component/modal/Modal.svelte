<script lang="ts">
	import type { Readable } from 'svelte/store';

	export let isClickable: boolean = true;
	export let isScalable: boolean | undefined = undefined;
	export let isOpen: Readable<boolean>;
	export let toggleOn: () => void;
	export let toggleOff: () => void;

	const onClick = (e: MouseEvent) => {
		if (isClickable) {
			toggleOn();
		}
	};
</script>

<button
	class="modal-button"
	class:scaler={isScalable ?? true}
	class:clickable={isClickable}
	on:click={onClick}
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
		margin: 0;
		border: 0;
		z-index: 10;
	}

	button.clickable {
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
		border-radius: 1em;
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
		cursor: pointer;
	}

	button.scaler {
		transition: all 0.2s ease-in-out;
		transform: scale(1);
	}

	button.scaler:hover {
		transform: scale(1.3);
	}
</style>
