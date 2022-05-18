<script lang="ts">
	import '../app.css';
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import Toast from '$lib/component/Toast.svelte';
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
