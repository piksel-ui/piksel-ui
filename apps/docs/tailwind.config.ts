import { createPreset } from "fumadocs-ui/tailwind-plugin";
import { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "../../node_modules/fumadocs-ui/dist/**/*.js",
    "./pui/**/*.{ts,tsx}",
    "./mdx-components.{ts,tsx}",
  ],
  presets: [createPreset()],
} satisfies Config;
