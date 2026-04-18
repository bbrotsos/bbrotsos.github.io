import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://brian.brotsos.com',

  vite: {
    plugins: [tailwindcss()]
  }
});