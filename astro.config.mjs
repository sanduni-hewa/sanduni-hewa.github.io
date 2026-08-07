import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sanduni-hewa.github.io',
  output: 'static',
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
});