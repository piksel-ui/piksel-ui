"use client";

import { Button } from "@/pui";
import { useState } from "react";
import { LuArrowRight, LuBadgeCheck } from "react-icons/lu";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading((prev) => !prev);

  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const variants = ["filled", "soft", "outline", "ghost", "link"] as const;
  const colors = ["blue", "green", "red", "yellow", "violet", "black"] as const;

  /**
   * Generates an array of combinations based on the provided variants, sizes, and colors.
   *
   * @param {Array<string>} variants - The array of variant options.
   * @param {Array<string>} sizes - The array of size options.
   * @param {Array<string>} colors - The array of color options.
   * @returns {Array<{ size: string, variant: string, color: string }>} - The array of combinations.
   */
  const combinations = variants.flatMap((variant) =>
    sizes.flatMap((size) => colors.map((color) => ({ size, variant, color })))
  );
  return (
    <main className="flex min-h-dvh flex-col justify-center text-center w-full max-w-screen-xl mx-auto items-center justify-center">
      <div className="grid gap-10 w-full max-w-screen-xl mx-auto py-20">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
        <div className="grid grid-cols-6 gap-10 place-items-center">
          {combinations.map(({ size, color, variant }) => (
            <Button
              key={`${size}-${color}-${variant}`}
              variant={variant}
              size={size}
              color={color}
              left={<LuBadgeCheck />}
              right={<LuArrowRight />}
              loading={loading}
              loaderPosition="right"
              onClick={toggleLoading}
            >
              {variant}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
