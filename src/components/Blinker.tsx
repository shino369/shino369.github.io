"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Blinker = () => {
  const [width, setWidth] = useState("w-0");
  useEffect(() => {
    setWidth("w-full");
  }, []);
  return (
    <div className={clsx("bg-black min-w-1 h-1 transition-all duration-1000 ease-in-out", width)}></div>
  );
};

export default Blinker;
