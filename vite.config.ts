import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from "@inlang/paraglide-vite"
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide"
		}),
		sveltekit(),
		Icons({
		  compiler: 'svelte',
		})
	]
});
