import { RootProvider } from "fumadocs-ui/provider";
import React, { FC } from "react";

export type ProvidersProps = {
  children?: React.ReactNode;
};

export const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props;

  return <RootProvider>{children}</RootProvider>;
};
