import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...classValue: ClassValue[]) => twMerge(clsx(classValue));
