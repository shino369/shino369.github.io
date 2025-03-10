"use client";

import clsx from "clsx";
import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
  white?: boolean;
}
const CodeBlock: React.FC<Props> = ({ children, title, white = false }) => {
  return (
    <div className="code-block overflow-hidden mb-2 shadow-sm">
      {!white && (
        <div
          className={clsx(
            "bg-zinc-900 text-white  p-2 flex justify-start px-2 items-center"
          )}
        >
          {/* <div className="rounded-full w-4 h-4 bg-red-500 mx-1" />
        <div className="rounded-full w-4 h-4 bg-yellow-500 mx-1" />
        <div className="rounded-full w-4 h-4 bg-green-500 mx-1" /> */}
          {/* <div className="ml-2">{title || ""}</div> */}
        </div>
      )}
      <div
        className={clsx(
          "flex items-center justify-start p-4",
          white
            ? "bg-slate-100 text-black"
            : "bg-[rgb(60,60,60)] text-[rgb(248,248,242)]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
