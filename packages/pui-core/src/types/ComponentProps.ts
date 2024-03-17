import { ComponentPropsWithRef, ElementType } from "react";
import { DistributiveOmit } from "./DistributiveOmit";

export type PikselComponentProps<T extends ElementType, P> = DistributiveOmit<
  ComponentPropsWithRef<T>,
  "as"
> &
  P;
