import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  site: 'https://Thomas-Zabalo.github.io',
});
