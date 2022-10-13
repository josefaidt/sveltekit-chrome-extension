import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// IMPORTANT: change the appDir. default is _app, which is not compatible with the browser extension
		// "Cannot load extension with file or directory name _app. Filenames starting with "_" are reserved for use by the system."
		appDir: 'app',
		adapter: adapter()
	}
};

export default config;
