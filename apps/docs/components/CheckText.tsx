import React, { FC } from "react";
import { Link } from "./Link";

export type CheckTextProps = {};

export const CheckText: FC<CheckTextProps> = () => {
  return (
    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
      If you haven't included Piksel UI in your project, include it first. You
      can check the{" "}
      {
        <Link href="/installation" blank>
          installation
        </Link>
      }{" "}
      page.
    </p>
  );
};
