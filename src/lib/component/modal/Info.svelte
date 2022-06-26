<script lang="ts">
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import Modal from './Modal.svelte';
	import { createModalIsOpenStorage } from '$lib/store/modal';
	import Cell from '$lib/component/grid/Cell.svelte';
	import { MAX_TRIAL } from '$lib/config';

	const { isOpen, toggleOn, toggleOff } = createModalIsOpenStorage();
</script>

<Modal {isOpen} {toggleOn} {toggleOff}>
	<Information slot="icon" size={32} />
	<div slot="content" class="infobox">
		<div class="header">수들</div>
		<div class="content">
			수들은 수능생 여러분들의 영어 단어 공부를 조금이나마 재밌게 하고자 만들어졌습니다. 수들은
			<a href="https://www.nytimes.com/games/wordle/index.html">WORDLE</a>에 영감을 받아서
			제작되었습니다.
		</div>
		<div class="split-bar" />
		<div class="content">
			영단어를 입력하고 <b>ENTER</b>를 누릅니다.
		</div>
		<div class="row">
			<Cell char={'S'} status={'correct'} />
			<Cell char={'O'} />
			<Cell char={'O'} />
			<Cell char={'D'} />
			<Cell char={'L'} />
			<Cell char={'E'} />
		</div>
		<div class="content">
			초록색으로 칠해진 셀은 정답에 존재하고 위치까지 정확히 맞은 문자입니다.
		</div>
		<div class="row">
			<Cell char={'S'} />
			<Cell char={'O'} />
			<Cell char={'O'} />
			<Cell char={'D'} status={'exist'} />
			<Cell char={'L'} />
			<Cell char={'E'} />
		</div>
		<div class="content">노란색으로 칠해진 셀은 정답에 존재하지만 위치는 틀린 문자입니다.</div>
		<div class="row">
			<Cell char={'S'} />
			<Cell char={'O'} />
			<Cell char={'O'} />
			<Cell char={'D'} />
			<Cell char={'L'} status={'absent'} />
			<Cell char={'E'} />
		</div>
		<div class="content">회색 칠해진 셀은 정답에 존재하지 않는 문자입니다.</div>
		<div class="content">
			<b>{MAX_TRIAL}번</b> 안에 정답을 맞추세요!
		</div>
	</div>
</Modal>

<style>
	div.infobox {
		width: 22em;
		margin: auto;
		margin-bottom: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: normal;
	}

	div.header {
		font-size: large;
		font-weight: 600;
	}

	div.content {
		font-size: medium;
		width: 22em;
		word-break: keep-all;
		margin: 0.2em 0em;
	}

	a {
		color: black;
		font-weight: 600;
	}

	div.split-bar {
		border: none;
		border-top: 0.1em solid grey;
		width: 22em;
		margin: 0.5em 0em;
	}

	div.row {
		display: flex;
	}
</style>
