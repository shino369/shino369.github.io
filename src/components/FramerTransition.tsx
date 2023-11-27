"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion} from "framer-motion";
import { usePathname } from "next/navigation";
const FramerTrans = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
    console.log(pathName)
  const variants = {
    center: {
      clipPath: "inset(50% round 50%)",
      transition: {
        duration: 0.6,
        ease: [0.83, 0.67, 0.67, 0.17],
      },
    },
    filled: {
      clipPath: "inset(0% round 0%)",
      transition: {
        duration: 0.55,
        ease: "circOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={new Date().toISOString()}
        variants={variants}
        initial="center"
        animate="filled"
        exit="center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerTrans;
