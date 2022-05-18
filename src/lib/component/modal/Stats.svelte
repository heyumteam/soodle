<script lang="ts">
	import SkillLevel from 'carbon-icons-svelte/lib/SkillLevel.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/store/modal';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<SkillLevel slot="icon" size={32} />
	<div slot="content" class="stats">아직 개발 중!</div>
</Modal>

<style>
	div.stats {
		display: flex;
		justify-content: center;
	}
</style>
