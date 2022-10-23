import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		__version__: JSON.stringify(process.env.npm_package_version)
	}
};

export default config;
