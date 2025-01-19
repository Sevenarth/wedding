import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'peach': {
					'50': '#fef4f2',
					'100': '#ffe7e1',
					'200': '#ffd3c8',
					'300': '#ffb3a0', // default
					'400': '#fd896c',
					'500': '#f5633e',
					'600': '#e24720',
					'700': '#be3817',
					'800': '#9d3217',
					'900': '#822f1a',
					'950': '#471508',
				},
				'flesh': {
					'50': '#fff5ed',
					'100': '#ffe8d5',
					'200': '#ffcba5', // default
					'300': '#ffaa72',
					'400': '#fd7c3a',
					'500': '#fc5913',
					'600': '#ed3d09',
					'700': '#c42b0a',
					'800': '#9c2310',
					'900': '#7d2011',
					'950': '#440d06',
				},
				'sage': {
					'50': '#f5f7ee',
					'100': '#e5e9d3', // default
					'200': '#d5dcba',
					'300': '#bac690',
					'400': '#a0af6c',
					'500': '#82934f',
					'600': '#65743c',
					'700': '#4e5a31',
					'800': '#40492b',
					'900': '#373f28',
					'950': '#1c2112',
				},
			},
		}
	},

	plugins: [typography, forms]
} satisfies Config;
