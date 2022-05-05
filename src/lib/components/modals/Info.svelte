<script lang="ts">
    import Information from "carbon-icons-svelte/lib/Information.svelte";
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/storages/modal';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<Information slot="icon" size={32} />
	<div slot="content" class='infobox'>
        수들!
        대한민국의 수능과 모의고사 영어과목에서 나왔던 단어들 중에 정답이 있습니다.

    </div>
</Modal>

<style>
    div.infobox {
        width: 22em;
        margin: auto;
    }
</style>
