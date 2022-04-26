<script lang="ts">
	import { GAME_TITLE } from './config';
    // import MdSettings from 'svelte-icons/md/MdSettings.svelte'
    import Setting from '$lib/Modals/Setting.svelte';
    import Stats from '$lib/Modals/Stats.svelte';
</script>

<header>
	<h1>{GAME_TITLE}</h1>
    <Stats />
    <Setting />
    <!-- <div class="flex">Hello</div> -->
</header>

<style>
    h1 {
        font-size: x-large;
        display: flex;
    }
</style>
