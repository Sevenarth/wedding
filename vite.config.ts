import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from "@inlang/paraglide-vite"
import Icons from 'unplugin-icons/vite';

// Fix for Prisma Client in the browser. Issue URL: https://github.com/prisma/prisma/issues/12504#issuecomment-1599452566
import { createRequire } from 'module'
import path from 'path'
const { resolve } = createRequire(import.meta.url)
const prismaClient = `prisma${path.sep}client`
const prismaClientIndexBrowser = resolve('@prisma/client/index-browser').replace(`@${prismaClient}`, `.${prismaClient}`)


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
	],
	// Fix for Prisma Client in the browser. Issue URL: https://github.com/prisma/prisma/issues/12504#issuecomment-1599452566
    resolve: {
        alias: {
            '.prisma/client/index-browser': path.relative(__dirname, prismaClientIndexBrowser),
        },
    },
});
