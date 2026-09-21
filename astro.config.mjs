import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import og from 'astro-og';

export default defineConfig({
  site: 'https://dregora.com',
  integrations: [og()],
  vite: {
        builder: {},
        plugins: [tailwindcss()],
        optimizeDeps: {
        include: ['astro/toolbar'],
        },
    },
});
