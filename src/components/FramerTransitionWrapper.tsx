"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
export const PageTransitionWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathName = usePathname();

  // const variants = {
  //   initial: {
  //     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  //     transition: { duration: 0.4 },
  //     // backgroundColor: '#000'
  //   },
  //   animate: {
  //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //     transition: { duration: 0.4, staggerChildren: 0.1 },
  //     // backgroundColor: '#000'
  //   },
  //   exit: {
  //     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  //     transition: { duration: 0.4 },
  //     backgroundColor: "#000",
  //   },
  // };

  return (
    <AnimatePresence mode="wait" >
      {/* <motion.div
        // className="bg-[rgba(0,0,0,0.2)] relative"
        key={pathName}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >

      </motion.div> */}
      <motion.div
        key={pathName}
        className="opacity-0 bg-[rgba(0,0,0,0.1)] max-height-dvh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const ProfileInitEffect = ({ children }: PropsWithChildren) => {
  const variants = {
    open: {
      height: "auto",
      transition: {
        duration: 1,
        // staggerChildren: 0.25,
        // delayChildren: 1.5,
        delay: 1.5,
          type: "spring",
        // ease: "",
      },
    },
    closed: {
      height: 0,
      // display: "none",
      transition: {
        // staggerChildren: 0.05,
        // staggerDirection: -1,
        // type: "spring"
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={clsx(
          "mt-2 overflow-auto scrollbar-hide"
        )}
        variants={variants}
        initial="closed"
        animate="open"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
