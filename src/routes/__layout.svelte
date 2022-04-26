<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
