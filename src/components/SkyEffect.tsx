"use client";
import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// unsolved error casuing crash
// maybe invesigate later

export default function SkyEffect() {
  const [current, setCurrent] = useState(11);
  const interval = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrent((prev) => (prev < 24 ? prev + 1 : 1));
    }, 3000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {/* {new Array(24).fill(1).map((_, i) => (
        <motion.div
          key={i}
          className={clsx("sky-gradient", `sky-gradient-${i}`)}
          onHoverStart={() => {
            setCurrent(i);
          }}
        />
      ))} */}
      <div
        className={clsx(
          "absolute top-0 left-0 w-full h-full dynamic-gradient -z-10",
          `sky-gradient-${current}`
        )}
      ></div>
    </div>
  );
}
