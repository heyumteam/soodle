<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/store/modal';
	import { resetStorage } from '$lib/storage/local';
	import { toast } from '$lib/store/toast';
	import { game } from '$lib/store/game';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();

	const resetStorageFunction = (e: MouseEvent) => {
		resetStorage();
		toggleOff();
		toast.send('기록이 삭제되었어요');
		game.reset();
	};
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<Settings slot="icon" size={32} />
	<div slot="content" class="control-panel">
		<div class="entry">
			<div>기록 삭제</div>
			<div on:click={resetStorageFunction} class="button danger">삭제</div>
		</div>
	</div>
</Modal>

<style>
	div.control-panel {
		display: flex;
		flex-direction: column;
	}

	div.entry {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: large;
		margin: 0.2em 1em;
	}

	div.button {
		font-size: large;
		font-weight: 800;
		border-radius: 10%;
		cursor: pointer;
		padding: 0.3em 0.7em;
	}

	div.danger {
		background-color: rgb(255, 65, 65);
	}
</style>
