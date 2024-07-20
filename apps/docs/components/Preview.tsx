"use client";

import { cn } from "@oguzhan-test/react-core";
import React, { FC } from "react";

export type PreviewProps = {
  center?: boolean;
  children?: React.ReactNode;
};

export const Preview: FC<PreviewProps> = (props) => {
  const { center, children } = props;

  return (
    <div
      tabIndex={-1}
      className={cn(
        "flex flex-col w-full px-4 md:px-10 py-10 border border-zinc-500/25 rounded-md my-4",
        center && "items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};
