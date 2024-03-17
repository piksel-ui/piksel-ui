import { PikselComponentProps, forwardRef, cs } from "@piksel-ui/core";
import React, { ElementType, ForwardedRef, Fragment } from "react";
import { Loader } from "../Loader";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "solid" | "light" | "outline" | "ghost" | "link";
  color?:
    | "blue"
    | "red"
    | "violet"
    | "green"
    | "yellow"
    | "zinc"
    | "white"
    | "black";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  square?: boolean;
  truncate?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

export const buttonStyle = cs({
  base: [
    "relative inline-flex items-center justify-center no-underline",
    "font-medium outline-0 transition cursor-pointer select-none flex-shrink-0 max-w-full whitespace-nowrap",
    "hover:bg-opacity-90",
    "active:bg-opacity-100",
    "focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
    "disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none",
  ],
  variants: {
    variant: {
      solid: "",
      light: "hover:bg-opacity-50",
      outline: "outline-1 -outline-offset-1",
      ghost: "active:bg-opacity-50",
      link: "underline-offset-4 hover:underline",
    },
    color: {
      blue: "focus-visible:ring-blue-500",
      red: "focus-visible:ring-red-500",
      violet: "focus-visible:ring-violet-500",
      green: "focus-visible:ring-green-500",
      yellow: "focus-visible:ring-yellow-500",
      zinc: "focus-visible:ring-zinc-500",
      white: "focus-visible:ring-zinc-50",
      black: "focus-visible:ring-zinc-950",
    },
    size: {
      xs: "px-2 text-xs h-8 gap-0.5",
      sm: "px-3 text-sm h-9 gap-1",
      md: "px-4 text-base h-10 gap-1.5",
      lg: "px-5 text-lg h-11 gap-2",
      xl: "px-5 text-xl h-12 gap-2.5",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    square: {
      true: "aspect-square px-0",
    },
    truncate: {
      true: "truncate line-clamp-1",
    },
    fullWidth: {
      true: "flex w-full",
    },
    loading: {
      true: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    /* -------------------------------------------------------------------------- */
    /*                                Solid variant                               */
    /* -------------------------------------------------------------------------- */
    {
      variant: "solid",
      color: "blue",
      className: "bg-blue-500 text-white hover:text-white",
    },
    {
      variant: "solid",
      color: "red",
      className: "bg-red-500 text-white hover:text-white",
    },
    {
      variant: "solid",
      color: "violet",
      className: "bg-violet-500 text-white hover:text-white",
    },
    {
      variant: "solid",
      color: "green",
      className: "bg-green-500 text-white hover:text-white",
    },
    {
      variant: "solid",
      color: "yellow",
      className: "bg-yellow-500 text-black hover:text-black",
    },
    {
      variant: "solid",
      color: "zinc",
      className: "bg-zinc-500 text-white hover:text-white",
    },
    {
      variant: "solid",
      color: "white",
      className: "bg-zinc-50 text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "solid",
      color: "black",
      className: "bg-zinc-950 text-white hover:text-white",
    },
    /* -------------------------------------------------------------------------- */
    /*                                Light variant                               */
    /* -------------------------------------------------------------------------- */
    {
      variant: "light",
      color: "blue",
      className: "bg-blue-100 text-blue-600 hover:text-blue-600",
    },
    {
      variant: "light",
      color: "red",
      className: "bg-red-100 text-red-600 hover:text-red-600",
    },
    {
      variant: "light",
      color: "violet",
      className: "bg-violet-100 text-violet-600 hover:text-violet-600",
    },
    {
      variant: "light",
      color: "green",
      className: "bg-green-100 text-green-600 hover:text-green-600",
    },
    {
      variant: "light",
      color: "yellow",
      className: "bg-yellow-100 text-yellow-600 hover:text-yellow-600",
    },
    {
      variant: "light",
      color: "zinc",
      className: "bg-zinc-100 text-zinc-600 hover:text-zinc-600",
    },
    {
      variant: "light",
      color: "white",
      className: "bg-white text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "light",
      color: "black",
      className: [
        "text-white bg-zinc-950",
        "hover:text-white hover:bg-opacity-90",
      ],
    },
    /* -------------------------------------------------------------------------- */
    /*                               Outline variant                              */
    /* -------------------------------------------------------------------------- */
    {
      variant: "outline",
      color: "blue",
      className: [
        "text-blue-500 outline-blue-500",
        "hover:bg-blue-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "red",
      className: [
        "text-red-500 outline-red-500",
        "hover:bg-red-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "violet",
      className: [
        "text-violet-500 outline-violet-500",
        "hover:bg-violet-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "green",
      className: [
        "text-green-500 outline-green-500",
        "hover:bg-green-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "yellow",
      className: [
        "text-yellow-500 outline-yellow-500",
        "hover:bg-yellow-500 hover:text-black",
      ],
    },
    {
      variant: "outline",
      color: "zinc",
      className: [
        "text-zinc-500 outline-zinc-500",
        "hover:bg-zinc-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "white",
      className: [
        "text-zinc-500 outline-zinc-500",
        "hover:bg-zinc-500 hover:text-white",
      ],
    },
    {
      variant: "outline",
      color: "black",
      className: [
        "text-zinc-950 outline-zinc-950",
        "hover:bg-zinc-950 hover:text-white",
      ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                Ghost variant                               */
    /* -------------------------------------------------------------------------- */
    {
      variant: "ghost",
      color: "blue",
      className: "text-blue-500 hover:bg-blue-50 hover:text-blue-500",
    },
    {
      variant: "ghost",
      color: "red",
      className: "text-red-500 hover:bg-red-50 hover:text-red-500",
    },
    {
      variant: "ghost",
      color: "violet",
      className: "text-violet-500 hover:bg-violet-50 hover:text-violet-500",
    },
    {
      variant: "ghost",
      color: "green",
      className: "text-green-500 hover:bg-green-50 hover:text-green-500",
    },
    {
      variant: "ghost",
      color: "yellow",
      className: "text-yellow-500 hover:bg-yellow-50 hover:text-yellow-500",
    },
    {
      variant: "ghost",
      color: "zinc",
      className: "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-500",
    },
    {
      variant: "ghost",
      color: "white",
      className: "text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "ghost",
      color: "black",
      className: "text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50",
    },
    /* -------------------------------------------------------------------------- */
    /*                                Link variant                                */
    /* -------------------------------------------------------------------------- */
    {
      variant: "link",
      color: "blue",
      className: "text-blue-500 hover:text-blue-500",
    },
    {
      variant: "link",
      color: "red",
      className: "text-red-500 hover:text-red-500",
    },
    {
      variant: "link",
      color: "violet",
      className: "text-violet-500 hover:text-violet-500",
    },
    {
      variant: "link",
      color: "green",
      className: "text-green-500 hover:text-green-500",
    },
    {
      variant: "link",
      color: "yellow",
      className: "text-yellow-500 hover:text-yellow-500",
    },
    {
      variant: "link",
      color: "zinc",
      className: "text-zinc-500 hover:text-zinc-500",
    },
    {
      variant: "link",
      color: "white",
      className: "text-zinc-100 hover:text-zinc-100",
    },
    {
      variant: "link",
      color: "black",
      className: "text-zinc-950 hover:text-zinc-950",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "blue",
    size: "md",
    radius: "md",
  },
});

export const Button = forwardRef(
  <T extends ElementType = "button">(
    props: PikselComponentProps<T, ButtonProps<T>>,
    ref: ForwardedRef<any>
  ) => {
    const {
      as: Component = "button",
      variant = "solid",
      color = "blue",
      size = "md",
      radius = "md",
      square = false,
      truncate = false,
      fullWidth = false,
      loading = false,
      className,
      children,
      ...rest
    } = props;

    const style = buttonStyle({
      variant,
      color,
      size,
      radius,
      square,
      truncate,
      fullWidth,
      loading,
      className,
    });
    return (
      <Component
        className={style}
        {...rest}
        onClick={loading ? undefined : rest.onClick}
        ref={ref}
      >
        {loading ? (
          <Fragment>
            <span className="invisible">{children}</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Loader size="1.25em" />
            </span>
          </Fragment>
        ) : (
          children
        )}
      </Component>
    );
  }
);
