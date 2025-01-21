"use client";
import clsx from "clsx";
import { motion } from "motion/react";
import { PropsWithChildren, useRef } from "react";

export default function Carousel({
  children,
  className,
  innerClassName,
  speed = 15000,
  active = true,
}: PropsWithChildren & {
  className?: string;
  innerClassName?: string;
  speed?: number;
  active?: boolean;
}) {
  const variants = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={active ? "show" : "hide"}
      className={clsx("banner relative overflow-hidden w-full", className)}
    >
      <div className={clsx("absolute flex w-full h-full items-center", innerClassName)}>
        <section
          style={{
            animation: `swipe ${speed}ms linear infinite backwards`,
          }}
          className="flex items-center py-2 min-w-max"
        >
          {children}
        </section>
        <section
          style={{
            animation: `swipe ${speed}ms linear infinite backwards`,
          }}
          className="flex items-center py-2 min-w-max"
        >
          {children}
        </section>
        <section
          style={{
            animation: `swipe ${speed}ms linear infinite backwards`,
          }}
          className="flex items-center py-2 min-w-max"
        >
          {children}
        </section>
      </div>
    </motion.div>
  );
}
