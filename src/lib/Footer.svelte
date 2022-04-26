<script>
	//@ts-ignore ; __version__ is defined in `svelte.config.js`
	const clientVersion = __version__;
</script>

<footer>
	<section>
		<a href="https://github.com/heyumteam/soodle">github.com/heyumteam/soodle</a>
		v{clientVersion}
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
