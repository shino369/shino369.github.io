"use client";

import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}
const CodeBlock: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="code-block overflow-hidden mb-2">
      <div className=" bg-zinc-900 text-white rounded-t-xl p-2 flex justify-start px-2 items-center">
        <div className="rounded-full w-4 h-4 bg-red-500 mx-1" />
        <div className="rounded-full w-4 h-4 bg-yellow-500 mx-1" />
        <div className="rounded-full w-4 h-4 bg-green-500 mx-1" />
        <div className="ml-2">{title || ""}</div>
      </div>
      <div className="bg-[rgb(43,43,43)] text-[rgb(248,248,242)] rounded flex items-center justify-start p-4 rounded-b-xl rounded-t-none">
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
