import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    astroI18next(),
  ],
});
