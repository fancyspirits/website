import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://fancyspirits.net",
  integrations: [mdx(), sitemap({
    filter: page => page !== "https://fancyspirits.net/impressum"
  }), robotsTxt(), prefetch({
    selector: "a[href^='/releases'], a[href^='/artists']"
  }), compress()]
});