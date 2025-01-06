import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'sage': 'rgb(229, 233, 211)',
				'peach': '#ffb3a0',
			},
		}
	},

	plugins: [typography, forms]
} satisfies Config;
