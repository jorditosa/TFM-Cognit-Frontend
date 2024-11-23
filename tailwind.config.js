/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			screens: {
				xs: '380px',
				sm: '540px',
				md: '668px',
			  }
		},
		extend: {},
		colors: {
			'purple': '#3C1642',
			'blue': '#086375',
			'aqua': '#1DD3B0',
			'lima': '#AFFC41',
			'mint': '#B2FF9E',
			'danger': '#e76f51',
			'white': '#ffffff',
			'dark': '#1f1f1f',
			'gray': {
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
			},
			'black': '#000000',
		},
		fontFamily: {
			sans: ['Baumans', 'sans'],
		},
	},
	plugins: [],
}
