<script lang="ts">
	import type { CellStatus } from '$lib/types';
	import type { Chars } from '$lib/components/keyboard/chars';

	let status: CellStatus | undefined = undefined;
	let char: Chars | undefined = undefined;
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
