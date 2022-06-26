<script lang="ts">
	import Info from '$lib/component/modal/Info.svelte';
	import Setting from '$lib/component/modal/Setting.svelte';
	import Stats from '$lib/component/modal/Stats.svelte';
	import Dday from '$lib/component/widget/dday.svelte';

	let rainbowLogo = false;
	const toggleRainbowLogo = () => {
		rainbowLogo = !rainbowLogo;
	};
</script>

<header>
	<div class="header">
		<div class="header-right">
			<div class="logo" class:rainbow={rainbowLogo} on:click={() => toggleRainbowLogo()}>수들</div>
			<div class="widget-container">
				<Dday />
			</div>
		</div>
		<div class="modals">
			<div class="modal-container">
				<Info />
			</div>
			<div class="modal-container">
				<Stats />
			</div>
			<div class="modal-container">
				<Setting />
			</div>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	div.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1em 2em;
	}

	div.header-right {
		display: flex;
		align-items: center;
	}

	div.logo {
		background-color: transparent;
		border: 0;
		color: black;
		font-size: var(--logo-size);
		font-weight: var(--logo-weight);
		cursor: default;
	}

	div.rainbow {
		animation: rainbow 1s infinite;
	}

	div.widget-container {
		margin-left: 1em;
	}

	div.modals {
		display: flex;
	}

	div.modal-container {
		margin: 0 0.5em;
	}

	@keyframes rainbow {
		0%,
		100% {
			color: #ff0000;
		}
		8% {
			color: #ff7f00;
		}
		17% {
			color: #ffff00;
		}
		25% {
			color: #7fff00;
		}
		33% {
			color: #00ff00;
		}
		42% {
			color: #00ff7f;
		}
		50% {
			color: #00ffff;
		}
		58% {
			color: #007fff;
		}
		67% {
			color: #0000ff;
		}
		75% {
			color: #7f00ff;
		}
		83% {
			color: #ff00ff;
		}
		92% {
			color: #ff007f;
		}
	}
</style>
