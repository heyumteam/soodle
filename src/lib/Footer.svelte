<script>
	import { GITHUB_ADDRESS } from '$lib/config';
	//@ts-ignore ; __version__ is defined in `svelte.config.js`
	const versionString = __version__;
</script>

<footer>
	<section>
		<a href="https://{GITHUB_ADDRESS}">{GITHUB_ADDRESS}</a>
		v{versionString}
	</section>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		color: var(--less-important-color);
	}

	a {
		color: var(--less-important-color);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
