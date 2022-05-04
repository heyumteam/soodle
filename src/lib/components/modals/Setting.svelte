<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/storages/modal';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<Settings slot="icon" size={32} />
	<div slot="content">Control Panel</div>
</Modal>
