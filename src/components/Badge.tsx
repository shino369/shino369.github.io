"use client";

import { REVERSED_SKILL_MAP } from "@/constants/common";
import clsx from "clsx";

const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const colorMap = {
    frontend: "border-sky-300 text-sky-300",
    backend: "border-green-300 text-green-300",
    mobile: "border-amber-300 text-amber-300",
    devops: "border-rose-300 text-rose-300",
  };

  return (
    <div
      className={clsx(
        "rounded-lg  px-2 pb-1 mr-1 mb-1 border-2",
        colorMap[
          REVERSED_SKILL_MAP[children as string] as keyof typeof colorMap
        ],
        className || ""
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
