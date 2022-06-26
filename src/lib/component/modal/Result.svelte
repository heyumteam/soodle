<script lang="ts">
	import Report from 'carbon-icons-svelte/lib/Report.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import Modal from './Modal.svelte';
	import html2canvas from 'html2canvas';
	import { createModalIsOpenStorage } from '$lib/store/modal';
	import { transparentModeOption } from '$lib/store/config';
	import { toast } from '$lib/store/toast';

	export let showResult = false;
	export let answer: string | undefined = undefined;

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();

	const transparentMode = transparentModeOption.option;

	const captureGrid = () => {
		// remove animations
		document
			.querySelectorAll('.not-in-correct-row')
			.forEach((n) => n.classList.remove('not-in-correct-row'));
		document
			.querySelectorAll('.in-correct-row')
			.forEach((n) => n.classList.remove('in-correct-row'));
		// capture
		const elt = document.querySelector('#capture');
		html2canvas(elt as HTMLElement).then((canvas) => {
			canvas.toBlob((blob) => {
				const item = new window.ClipboardItem({ 'image/png': blob as Blob });
				navigator.clipboard.write([item]);
			});
		});
		toast.send('사진이 복사 되었어요');
	};
</script>

<div data-html2canvas-ignore="true">
	<Modal {isOpen} {toggleOn} {toggleOff} isClickable={showResult} isScalable={false}>
		<Report slot="icon" size={32} />
		<div slot="content" class="infobox">
			<div class="answer">
				{answer ?? ''}
				<a href="https://en.dict.naver.com/#/search?query={answer}">
					<Search size={24} />
				</a>
			</div>
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
				<div>공유</div>
				<div class="button normal" on:click={captureGrid}>사진 복사</div>
			</div>
		</div>
	</Modal>
</div>

<style>
	div.infobox {
		width: 22em;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.answer {
		font-size: xx-large;
	}

	div.entry {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: large;
		margin: 0.2em 1em;
		width: 100%;
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

	div.button {
		font-size: large;
		font-weight: 800;
		border-radius: 10%;
		cursor: pointer;
		padding: 0.3em 0.7em;
	}

	div.button.normal {
		background-color: var(--normal-button-color);
	}

	a {
		color: black;
	}
</style>
