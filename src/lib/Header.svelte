<script lang="ts">
	import { GAME_TITLE } from './config';
	import Setting from '$lib/Modals/Setting.svelte';
	import Stats from '$lib/Modals/Stats.svelte';
</script>

<header>
	<div class='header'>
		<h1>{GAME_TITLE}</h1>
		<div class="modals">
			<Stats />
			<Setting />
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	div.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:30em;
	}

	h1 {
		font-size: x-large;
	}
</style>
