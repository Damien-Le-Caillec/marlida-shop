import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // AJOUTE CETTE LIGNE (Remplace 'marlida-shop' par le nom EXACT de ton repo GitHub)
  base: '/marlida-shop/', 
})