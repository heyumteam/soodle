<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<div class='margin' />
	<Grid />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	div.margin {
		height: 8em;
	}
</style>
