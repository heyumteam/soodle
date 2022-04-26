<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import InputField from '$lib/InputField.svelte';
</script>

<svelte:head>
	<title>수들, Soodle</title>
</svelte:head>

<section>
	<InputField />
	<InputField />
	<InputField />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
