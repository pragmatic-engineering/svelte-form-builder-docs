import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  preact(),
  // Enable React for the Algolia search component.
  //react(),
  svelte(), mdx()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "slack-dark",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["js", "ts", "svelte"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["astro"]
    },
    build: {
      target: "esnext"
    }
  },
  site: `http://astro.build`
});