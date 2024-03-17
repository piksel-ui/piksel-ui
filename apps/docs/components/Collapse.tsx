import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Button } from "../pui";
import { cn } from "@piksel-ui/core";
import { useToggle } from "@piksel-ui/hooks";

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
        <div className="absolute inset-x-0 bottom-0 text-center bg-gradient-to-b from-transparent to-white">
          <Button
            color="blue"
            variant="light"
            size="sm"
            onClick={() => toggleExpanded()}
          >
            {expanded ? "Collapse code" : "Expand code"}
          </Button>
        </div>
      )}
    </div>
  );
};
