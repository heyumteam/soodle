<script lang="ts">
	import Info from '$lib/component/modal/Info.svelte';
	import Setting from '$lib/component/modal/Setting.svelte';
	import Stats from '$lib/component/modal/Stats.svelte';

	let rainbowLogo = false;
	const toggleRainbowLogo = () => {
		rainbowLogo = !rainbowLogo;
	};
</script>

<header>
	<div class="header">
		<button class="logo" class:rainbow={rainbowLogo} on:click={(e) => toggleRainbowLogo()}>
			수들
		</button>
		<div class="modals">
			<Info />
			<Stats />
			<Setting />
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

	button.logo {
		background-color: transparent;
		border: 0;
		color: black;
		font-size: xx-large;
		font-weight: 900;
	}

	button.rainbow {
		animation: rainbow 1s infinite;
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
