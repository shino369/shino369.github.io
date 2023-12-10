"use client";

import { useAppSelector } from "@/redux/store";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export const Question = ({
  children,
  id,
}: PropsWithChildren & { id: string }) => {
  const currentHash = useAppSelector(
    (rootState) => rootState.common.currentHash
  );
  return (
    <div className={clsx("font-semibold text-lg md:text-xl p-4 w-[90vw] md:w-[800px]", id === currentHash ? 'bg-yellow-400 text-black' : 'bg-red-400 text-white')}>
      Q: {children}
    </div>
  );
};

export const Answer = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-semibold text-lg md:text-xl bg-[rgb(43,43,43)] text-[rgb(226,226,226)] p-4 mb-4 whitespace-pre-wrap w-[90vw] md:w-[800px]">
      {children}
    </div>
  );
};
