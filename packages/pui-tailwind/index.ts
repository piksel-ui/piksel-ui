import { violet } from "tailwindcss/colors";
import type { Config } from "tailwindcss";
import { merge } from "lodash";

export const createTailwindPreset = (params: Partial<Config> = {}): Config => {
  const pikselUiTailwindTheme: Config = {
    content: ["node_modules/@piksel-ui/**/*.{js,ts,jsx,tsx,css}"],
    theme: {
      extend: {
        colors: {
          primary: violet,
        },
      },
    },
  };

  return merge(pikselUiTailwindTheme, params);
};
