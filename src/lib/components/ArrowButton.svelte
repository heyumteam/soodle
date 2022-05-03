<script lang="ts">
	export let char: string;
	export let onclick: () => void;
</script>

<button on:click={onclick}>
	{char}
</button>

<style>
	button {
		background-color: transparent;
		width: 5em;
		height: 20em;
		border: 0;
	}
</style>
