import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Base path adapte au deploiement GitHub Pages
// (https://MOOONSTREEE.github.io/Portfolio/).
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
