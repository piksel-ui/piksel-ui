import React, { FC } from "react";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 text-center">
      <div className="mt-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://oguzhan.dev"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            target="_blank"
          >
            Oğuzhan Yılmaz
          </a>
        </p>
        <p>&copy; {year} Piksel UI. All rights reserved.</p>
      </div>
    </footer>
  );
};
