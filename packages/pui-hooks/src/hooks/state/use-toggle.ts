import { useReducer } from "react";

export const useToggle = <T = boolean>(
  options: readonly T[] = [false, true] as any
) => {
  const [[option], toggle] = useReducer(
    (state: T[], action: React.SetStateAction<T>) => {
      const value = action instanceof Function ? action(state[0] as T) : action;
      const index = Math.abs(state.indexOf(value));

      return state.slice(index).concat(state.slice(0, index));
    },
    options as T[]
  );

  return [option, toggle as (value?: React.SetStateAction<T>) => void] as const;
};
