"use client";

import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Button } from "../pui";
import { cn } from "@oguzhan-test/react-core";
import { useToggle } from "@oguzhan-test/react-hooks";

export type CollapseProps = {
  children?: React.ReactNode;
};

export const Collapse: FC<CollapseProps> = (props) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [expanded, toggleExpanded] = useToggle([false, true]);
  const [scrollable, setScrollable] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      setScrollable(ref.current.scrollHeight > ref.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl relative mt-6",
        expanded ? "max-h-none pb-10" : "max-h-96"
      )}
      ref={ref}
    >
      {children}
      {scrollable && (
        <div className="absolute inset-x-0 bottom-0 text-center bg-gradient-to-b from-gray-100/0 to-white dark:to-[#111111] pointer-events-none">
          <Button
            color="blue"
            variant="filled"
            size="sm"
            onClick={() => toggleExpanded()}
            className="pointer-events-auto"
          >
            {expanded ? "Collapse code" : "Expand code"}
          </Button>
        </div>
      )}
    </div>
  );
};
