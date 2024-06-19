/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // Chemins vers vos fichiers sources
  ],
  theme: {
    extend: {}, // Vous pouvez étendre le thème Tailwind CSS ici
  },
  plugins: [], // Vous pouvez ajouter des plugins Tailwind CSS ici
}
