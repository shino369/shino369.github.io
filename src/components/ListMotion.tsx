"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

export const ListItem = ({
  children,
  scale,
  spring,
  className,
}: {
  children: React.ReactNode;
  scale?: boolean;
  spring?: boolean;
  className?: string;
}) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          stiffness: 1000,
          velocity: -100,
          duration: 0.7,
          type: spring ? "spring" : "",
        },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, duration: 0.7, type: spring ? "spring" : "" },
      },
    },
  };
  return (
    <motion.li
      variants={variants}
      //   whileHover={{ scale: 1.1 }}
      {...{
        ...(scale ? { whileTap: { scale: 0.95 } } : {}),
      }}
      className={clsx(className)}
    >
      {children}
    </motion.li>
  );
};

export const ListWrapper = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant: Record<string, any>;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.ul
        variants={variant}
        initial="closed"
        animate="open"
        className={clsx(className)}
      >
        {children}
      </motion.ul>
    </AnimatePresence>
  );
};
