import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const cn = (...classValue: ClassValue[]) => twMerge(clsx(classValue));

export { cn };
