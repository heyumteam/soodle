<script lang="ts">
	import SkillLevel from 'carbon-icons-svelte/lib/SkillLevel.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/storages/modal';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<SkillLevel slot="icon" size={32} />
	<div slot="content">Stats Modal</div>
</Modal>
