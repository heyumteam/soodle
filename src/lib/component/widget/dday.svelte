<script lang="ts">
	import { TARGET_DAY } from '$lib/config';

	const today = Date.now();
	const targetDay = new Date(TARGET_DAY).getTime();
	const remainingDates = Math.floor((today - targetDay) / (24 * 60 * 60 * 1000));
</script>

<div class="widget">
	D{remainingDates < 0 ? remainingDates : remainingDates === 0 ? '-DAY' : '+' + remainingDates}
</div>

<style>
	div.widget {
		font-size: x-large;
		font-weight: var(--logo-weight);
	}
</style>
