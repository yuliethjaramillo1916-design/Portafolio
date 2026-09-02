import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// En GitHub Actions se usa /Portafolio/ como base; en local se usa ./
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/Portafolio/' : './',
  server: {
    port: 3000,
    open: true,
    hmr: {
      clientPort: 443
    }
  }
});

