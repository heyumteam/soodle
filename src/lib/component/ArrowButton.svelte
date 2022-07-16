<script lang="ts">
	export let onclick: () => void;
</script>

<button on:click={onclick}>
	<slot name="display" />
</button>

<style>
	button {
		background-color: transparent;
		width: 5em;
		height: 20em;
		border: 0;
		cursor: pointer;
		color: black;
	}

	button:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
</style>
