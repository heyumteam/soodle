<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toast from '$lib/components/Toast.svelte';
</script>

<Header />

<main>
	<Toast />
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
