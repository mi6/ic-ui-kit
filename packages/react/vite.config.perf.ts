import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [],
  build: {
    outDir: resolve(__dirname, 'dist-perf'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/performance-tests/index.tsx'),
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  root: '.',
  publicDir: false,
})
