<script lang="ts">
	import { GAME_TITLE, GAME_URL } from './config';
	import Setting from './modals/Setting.svelte';
	import Stats from './modals/Stats.svelte';
</script>

<header>
	<div class="header">
		<h1><a href={GAME_URL}>{GAME_TITLE}</a></h1>
		<div class="modals">
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
		width: 30em;
	}

	h1 {
		font-size: x-large;
	}

	h1 > a {
		color: black;
		text-decoration: none;
	}

	h1 > a:hover {
		-webkit-animation: rainbow 1s infinite;
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
