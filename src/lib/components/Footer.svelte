<script lang="ts">
	import { GITHUB_ADDRESS } from '$lib/config';
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
		justify-content: center;
		color: var(--less-important-color);
		padding: 2em 0;
	}

	a {
		color: var(--less-important-color);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
