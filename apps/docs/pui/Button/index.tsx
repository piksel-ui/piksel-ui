"use client";

import { cn, tv, VariantProps } from "@oguzhan-test/react-core";
import { Slot, Slottable, SlotProps } from "@radix-ui/react-slot";
import React, { ButtonHTMLAttributes, forwardRef, useCallback } from "react";
import { Loader } from "../Loader";

/**
 * Button component
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> &
  SlotProps & {
    /**
     * If true, the button will be rendered as a child component
     */
    asChild?: boolean;
    /**
     * Left content of the button
     */
    left?: React.ReactNode;
    /**
     * Right content of the button
     */
    right?: React.ReactNode;
    /**
     * Loader component to be displayed while loading
     */
    loader?: React.ReactNode;
    /**
     * Position of the loader
     */
    loaderPosition?: "left" | "right";
    /**
     * Content to be displayed while loading.
     * Works when loading=true and loaderPosition="full".
     */
    childrenWhenLoading?: SlotProps["children"];
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      left,
      right,
      loader = <Loader />,
      loaderPosition = "left",
      childrenWhenLoading,
      variant,
      color,
      size,
      radius,
      square,
      truncate,
      fullWidth,
      loading,
      className,
      children,
      ...rest
    } = props;

    const componentClassNames = button({
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

    const LeftRenderer = useCallback(() => {
      if (loading && loaderPosition === "left") {
        return <span>{loader}</span>;
      }
      return left;
    }, [loading, loaderPosition, loader, left]);
    const RightRenderer = useCallback(() => {
      if (loading && loaderPosition === "right") {
        return <span>{loader}</span>;
      }
      return right;
    }, [loading, loaderPosition, loader, right]);

    const Component = asChild ? Slot : "button";

    return (
      <Component className={cn(componentClassNames)} {...rest} ref={ref}>
        <LeftRenderer />
        <Slottable>
          {loading && childrenWhenLoading ? childrenWhenLoading : children}
        </Slottable>
        <RightRenderer />
      </Component>
    );
  }
);
export const button = tv({
  /**
   * Base styles of the button
   */
  base: [
    "relative inline-flex items-center justify-center no-underline outline-0",
    "font-medium ring-0 ring-offset-0 transition-all cursor-pointer select-none flex-shrink-0 max-w-full whitespace-nowrap overflow-hidden",
    "hover:bg-opacity-90",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:bg-opacity-100",
    "disabled:opacity-75 disabled:cursor-not-allowed",
  ],
  variants: {
    /**
     * Variant prop of the button
     */
    variant: {
      filled: "border",
      soft: "hover:bg-opacity-50",
      outline: "border focus-visible:ring-transparent",
      ghost: "active:bg-opacity-50",
      link: "underline-offset-4 hover:underline",
    },
    /**
     * Color prop of the button
     */
    color: {
      blue: "ring-blue-300 border-blue-600",
      red: "ring-red-300 border-red-600",
      violet: "ring-violet-300 border-violet-600",
      green: "ring-green-300 border-green-600",
      yellow: "ring-yellow-200 border-yellow-500",
      zinc: "ring-zinc-300 border-zinc-600",
      white: "ring-zinc-50 border-zinc-50",
      black: "ring-zinc-400 border-zinc-950",
    },
    /**
     * Size prop of the button
     */
    size: {
      xs: "px-2 text-xs h-8 gap-1",
      sm: "px-3 text-sm h-9 gap-1.5",
      md: "px-4 text-md h-10 gap-2",
      lg: "px-5 text-lg h-11 gap-2.5",
      xl: "px-5 text-xl h-12 gap-3",
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
      true: "px-0",
    },
    truncate: {
      true: "truncate line-clamp-1",
    },
    fullWidth: {
      true: "flex w-full",
    },
    loading: {
      true: "",
    },
  },

  compoundVariants: [
    /* -------------------------------------------------------------------------- */
    /*                             Variants and colors                            */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                               Filled variant                               */
    /* -------------------------------------------------------------------------- */
    {
      variant: "filled",
      color: "blue",
      className: "bg-blue-500 text-white hover:text-white",
    },
    {
      variant: "filled",
      color: "red",
      className: "bg-red-500 text-white hover:text-white",
    },
    {
      variant: "filled",
      color: "violet",
      className: "bg-violet-500 text-white hover:text-white",
    },
    {
      variant: "filled",
      color: "green",
      className: "bg-green-500 text-white hover:text-white",
    },
    {
      variant: "filled",
      color: "yellow",
      className: "bg-yellow-400 text-black hover:text-black",
    },
    {
      variant: "filled",
      color: "zinc",
      className: "bg-zinc-500 text-white hover:text-white",
    },
    {
      variant: "filled",
      color: "white",
      className: "bg-zinc-50 text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "filled",
      color: "black",
      className: "bg-zinc-950 text-white hover:text-white",
    },
    /* -------------------------------------------------------------------------- */
    /*                                Soft variant                                */
    /* -------------------------------------------------------------------------- */
    {
      variant: "soft",
      color: "blue",
      className: "bg-blue-100 text-blue-600 hover:text-blue-600",
    },
    {
      variant: "soft",
      color: "red",
      className: "bg-red-100 text-red-600 hover:text-red-600",
    },
    {
      variant: "soft",
      color: "violet",
      className: "bg-violet-100 text-violet-600 hover:text-violet-600",
    },
    {
      variant: "soft",
      color: "green",
      className: "bg-green-100 text-green-600 hover:text-green-600",
    },
    {
      variant: "soft",
      color: "yellow",
      className: "bg-yellow-100 text-yellow-600 hover:text-yellow-600",
    },
    {
      variant: "soft",
      color: "zinc",
      className: "bg-zinc-100 text-zinc-600 hover:text-zinc-600",
    },
    {
      variant: "soft",
      color: "white",
      className: "bg-white text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "soft",
      color: "black",
      className: "bg-zinc-200 text-zinc-600",
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
        "focus-visible:ring-offset-blue-300",
      ],
    },
    {
      variant: "outline",
      color: "red",
      className: [
        "text-red-500 outline-red-500",
        "hover:bg-red-500 hover:text-white",
        "focus-visible:ring-offset-red-300",
      ],
    },
    {
      variant: "outline",
      color: "violet",
      className: [
        "text-violet-500 outline-violet-500",
        "hover:bg-violet-500 hover:text-white",
        "focus-visible:ring-offset-violet-300",
      ],
    },
    {
      variant: "outline",
      color: "green",
      className: [
        "text-green-500 outline-green-500",
        "hover:bg-green-500 hover:text-white",
        "focus-visible:ring-offset-green-300",
      ],
    },
    {
      variant: "outline",
      color: "yellow",
      className: [
        "text-yellow-600",
        "hover:bg-yellow-500 hover:text-black",
        "focus-visible:ring-offset-yellow-300",
      ],
    },
    {
      variant: "outline",
      color: "zinc",
      className: [
        "text-zinc-500",
        "hover:bg-zinc-500 hover:text-white",
        "focus-visible:ring-offset-zinc-300",
      ],
    },
    {
      variant: "outline",
      color: "white",
      className: [
        "text-zinc-500",
        "hover:bg-zinc-500 hover:text-white",
        "focus-visible:ring-offset-zinc-300",
      ],
    },
    {
      variant: "outline",
      color: "black",
      className: [
        "text-zinc-950",
        "hover:bg-zinc-950 hover:text-white",
        "focus-visible:ring-offset-zinc-400",
      ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                Ghost variant                               */
    /* -------------------------------------------------------------------------- */
    {
      variant: "ghost",
      color: "blue",
      className: "text-blue-500 hover:bg-blue-100 hover:text-blue-500",
    },
    {
      variant: "ghost",
      color: "red",
      className: "text-red-500 hover:bg-red-100 hover:text-red-500",
    },
    {
      variant: "ghost",
      color: "violet",
      className: "text-violet-500 hover:bg-violet-100 hover:text-violet-500",
    },
    {
      variant: "ghost",
      color: "green",
      className: "text-green-500 hover:bg-green-100 hover:text-green-500",
    },
    {
      variant: "ghost",
      color: "yellow",
      className: "text-yellow-500 hover:bg-yellow-100 hover:text-yellow-500",
    },
    {
      variant: "ghost",
      color: "zinc",
      className: "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-500",
    },
    {
      variant: "ghost",
      color: "white",
      className: "text-zinc-950 hover:text-zinc-950",
    },
    {
      variant: "ghost",
      color: "black",
      className: "text-zinc-600 hover:bg-zinc-100",
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
    /* -------------------------------------------------------------------------- */
    /*                              Square and sizes                              */
    /* -------------------------------------------------------------------------- */
    {
      square: true,
      size: "xs",
      className: "size-8",
    },
    {
      square: true,
      size: "sm",
      className: "size-9",
    },
    {
      square: true,
      size: "md",
      className: "size-10",
    },
    {
      square: true,
      size: "lg",
      className: "size-11",
    },
    {
      square: true,
      size: "xl",
      className: "size-12",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "blue",
    size: "md",
    radius: "md",
  },
});
