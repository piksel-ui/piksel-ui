import React from "react";
import NextLink from "next/link";
import { cn } from "@oguzhan-test/react-core";

export const Link = (
  props: Parameters<typeof NextLink>[0] & { blank?: boolean }
) => {
  const { className, blank = false, target, ...rest } = props;
  return (
    <NextLink
      className={cn(
        "text-blue-500 hover:text-blue-600 underline decoration-blue-500 underline-offset-4 hover:underline-offset-2 transition-all",
        className
      )}
      target={target || blank ? "_blank" : undefined}
      {...rest}
    />
  );
};
