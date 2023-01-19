import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), astroI18next()],
  site: 'https://alice-abridged.vercel.app/'
});