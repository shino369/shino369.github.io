"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const FramerTransitionWrapper = ({ children }: { children: ReactNode }) => {
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
    <AnimatePresence mode="wait" initial={false}>
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
        className="opacity-0 bg-[rgba(0,0,0,0.1)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerTransitionWrapper;
