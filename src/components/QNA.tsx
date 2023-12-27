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
    <div
      className={clsx(
        "font-semibold p-4 w-[90vw] md:w-[800px]",
        id === currentHash
          ? "bg-yellow-400 text-black"
          : "bg-red-400 text-white"
      )}
    >
      Q: {children}
    </div>
  );
};

export const Answer = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-semibold bg-[rgb(43,43,43)] text-[rgb(226,226,226)] p-4 mb-4 whitespace-pre-wrap w-[90vw] md:w-[800px]">
      {children}
    </div>
  );
};

export const Highlight = ({ children }: PropsWithChildren) => {
  return <span className="text-black bg-[rgb(234,179,8,0.9)] px-1">
    {children}
    </span>;
};
