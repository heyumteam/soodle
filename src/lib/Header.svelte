<script lang="ts">
	import { GAME_TITLE } from './config';
	import Setting from '$lib/Modals/Setting.svelte';
	import Stats from '$lib/Modals/Stats.svelte';
</script>

<header>
	<h1>{GAME_TITLE}</h1>
	<div class="modals">
		<Stats />
		<Setting />
	</div>
</header>

<style>
	h1 {
		font-size: x-large;
		display: flex;
	}
	h1,
	div.modals {
		display: inline;
		vertical-align: middle;
	}
	div.modals {
		float: right;
	}
</style>
