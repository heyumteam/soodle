<script lang="ts">
	import type { CellStatus } from './cellStatus';

	let status: CellStatus | undefined = undefined;
	let char: string | undefined = undefined;
</script>

<div class="cell">
	{char ?? ''}
</div>

<style>
	div.cell {
		display: flex;
		font-size: x-large;
		font-weight: 700;
		border: 0.1em solid grey;
		width: 2.2em;
		height: 2.2em;
		justify-content: center;
		align-items: center;
		border-radius: 10%;
		margin: 0.15em;
	}
</style>
