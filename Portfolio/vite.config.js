import { defineConfig } from 'vite';
import { globSync } from 'glob';
import { resolve } from 'path';

export default defineConfig({
  base: './', 
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync('*.html').map(file => [
          file.replace(/\.html$/, ''),
          resolve(__dirname, file)
        ])
      )
    }	
  }
});

