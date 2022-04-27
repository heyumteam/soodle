<script lang="ts">
	import Grid from '$lib/components/grid/Grid.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<Grid />
	<Keyboard />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-top: 2em;
		flex-grow: 1;
	}
</style>
