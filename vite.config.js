import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use './' se o projeto não estiver na raiz
  build: {
    outDir: 'dist',
  },
  
})
