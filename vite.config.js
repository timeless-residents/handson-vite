// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/handson-vite/', // Base path for GitHub Pages
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})
