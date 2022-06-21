<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/store/modal';
	import { resetStorage } from '$lib/storage/local';
	import { toast } from '$lib/store/toast';
	import { game } from '$lib/store/game';
	import { stats } from '$lib/store/stats';
	import { transparentModeOption } from '$lib/store/config';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();

	const transparentMode = transparentModeOption.option;

	const resetStorageFunction = (e: MouseEvent) => {
		resetStorage();
		toggleOff();
		toast.send('기록이 삭제되었어요');
		game.reset();
		stats.reset();
	};
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<Settings slot="icon" size={32} />
	<div slot="content" class="control-panel">
		<div class="entry">
			<div>사진 모드</div>
			<div
				class="slider"
				class:toggle-on={$transparentMode}
				on:click={transparentModeOption.toggle}
			>
				<div class="toggle" />
			</div>
		</div>
		<div class="entry">
			<div>기록 삭제</div>
			<div class="button danger" on:click={resetStorageFunction}>삭제</div>
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
		background-color: var(--danger-button-color);
	}

	div.slider {
		display: flex;
		align-items: center;
		width: 3em;
		height: 1.6em;
		cursor: pointer;
		border-radius: 1em;
		background-color: grey;
	}

	div.slider.toggle-on {
		background-color: #2196f3;
		flex-direction: row-reverse;
	}

	div.toggle {
		width: 1.2em;
		height: 1.2em;
		border-radius: 50%;
		margin: 0.2em;
		background-color: white;
	}
</style>
