<script lang="ts">
	import ChartLine from 'carbon-icons-svelte/lib/ChartLine.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/storages/modal';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<ChartLine slot="icon" size={32} />
	<div slot="content">Stats Modal</div>
</Modal>
