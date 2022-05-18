<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { toasts } from '$lib/store/toast';
</script>

<div class="container">
	{#each $toasts as toast (toast.id)}
		<div class="message" animate:flip transition:fly={{ y: 30 }}>
			{toast.message}
		</div>
	{/each}
</div>

<style>
	div.container {
		position: fixed;
		top: 1em;
		left: 0;
		right: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		pointer-events: none;
	}

	div.message {
		font-size: larger;
		color: white;
		background-color: black;
		padding: 0.3em 0.8em;
		font-weight: 700;
		border-radius: 2%;
		margin: 0.2em;
	}
</style>
