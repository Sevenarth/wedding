import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import Icons from 'unplugin-icons/vite';

// Fix for Prisma Client in the browser. Issue URL: https://github.com/prisma/prisma/issues/12504#issuecomment-1599452566
import { createRequire } from 'module'
import path from 'path'
const { resolve } = createRequire(import.meta.url)
const prismaClient = `prisma${path.sep}client`
const prismaClientIndexBrowser = resolve('@prisma/client/index-browser').replace(`@${prismaClient}`, `.${prismaClient}`)


export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["url", "cookie", "baseLocale"],
			urlPatterns: [
				{
					pattern: "https://vizzar.ro/:path(.*)?",
					localized: [
						["en", "https://wedding.vizzar.ro/:path(.*)?"],
						["ro", "https://nunta.vizzar.ro/:path(.*)?"],
						["it", "https://sposi.vizzar.ro/:path(.*)?"],
					],
				},
			],
			cookieName: "locale",
			disableAsyncLocalStorage: true
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
