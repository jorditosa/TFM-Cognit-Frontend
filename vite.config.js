import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5175
	},
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./setUpTests.js'],
		testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
		globals: true
	},
	optimizeDeps: {
		include: ['@tabler/icons-react'],
		exclude: [],
	  },
})
