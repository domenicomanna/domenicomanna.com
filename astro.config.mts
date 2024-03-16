import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ['github-light'],
    }),
  ],
});
