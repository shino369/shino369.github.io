"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

const DelayDiv = ({
  children,
  time,
  inView,
  effect,
}: {
  children: ReactNode;
  time?: number;
  inView?: boolean;
  effect: "opacity" | "translateX" | "both";
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, time);
  }, [time]);

  const getClassname = () => {
    switch (effect) {
      case "opacity":
        return show ? "" : "opacity-0";
      case "translateX":
        return show ? "" : "-translate-x-96";
      case "both":
        return show ? "" : "opacity-0 -translate-x-96";
      default:
        return "";
    }
  };

  return (
    <div className={clsx("transition-all duration-700", getClassname())}>
      {children}
    </div>
  );
};

export default DelayDiv;
