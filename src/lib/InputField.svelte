<script lang="ts">
	import { onMount } from 'svelte';

	let maximumLength = 5;
	var charInputs: string[] = [];

	onMount(() => {
		document.addEventListener('keypress', (event) => {
			let char = event.key;
			char = char.toUpperCase();
			charInputs = [...charInputs, char];
		});
	});
</script>

<div class="inputField">
	{#each charInputs as char}
		<div class="charSquare">{char}</div>
	{/each}
</div>

<style>
	.charSquare {
		display: flex;
		color: var(--text-color);
		/* width: 50px; */
	}
</style>
