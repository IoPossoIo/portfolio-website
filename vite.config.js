import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // Set the base path for your assets
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entry point for your application
      },
    },
  },
  server: {
    open: true, // Automatically open the app in the browser on server start
  },
});
