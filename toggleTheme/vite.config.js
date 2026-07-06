import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Trigger Pages rebuild
export default defineConfig({
  plugins: [react()],
  base: '/react/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  }
})
