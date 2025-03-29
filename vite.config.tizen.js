import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist/tizen',
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: resolve(__dirname, 'index.tizen.html'),
    },
  },
  plugins: [react()],
});
