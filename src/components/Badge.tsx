"use client";

import clsx from "clsx";

const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx("rounded-lg  px-1 mr-1 mb-1 shadow-sm shadow-black", className || '')}>{children}</div>
  );
};

export default Badge;
