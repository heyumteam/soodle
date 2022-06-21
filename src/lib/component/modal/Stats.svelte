<script lang="ts">
	import SkillLevel from 'carbon-icons-svelte/lib/SkillLevel.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/store/modal';
	import { stats } from '$lib/store/stats';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<SkillLevel slot="icon" size={32} />
	<div slot="content" class="stats">
		<div class="entry">
			<div>공부한 단어 수</div>
			<div>{$stats.played}</div>
		</div>
		<div class="entry">
			<div>정답 단어 수</div>
			<div>{$stats.winCount}</div>
		</div>
		<div class="entry">
			<div>연속으로 공부한 일 수</div>
			<div>{$stats.visitStroke}</div>
		</div>
		<div class="entry">
			<div>총 공부한 일 수</div>
			<div>{$stats.totalVisits}</div>
		</div>
		<div class="distribution">
			<div>분포</div>
			{#each $stats.guessDistribution as count, trail}
				<div>{trail + 1}: {count}</div>
			{/each}
		</div>
	</div>
</Modal>

<style>
	div.stats {
		display: flex;
		flex-direction: column;
		font-size: large;
		justify-content: center;
	}

	div.entry {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.3em 2em;
	}

	div.distribution {
		margin: 0.3em 2em;
	}
</style>
