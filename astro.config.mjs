import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://fancyspirits.net",
  integrations: [mdx(), sitemap({
    filter: page => page !== "https://fancyspirits.net/impressum"
  }), robotsTxt(), compress()],
  prefetch: {
    defaultStrategy: "viewport"
  },
  scopedStyleStrategy: "where"
});