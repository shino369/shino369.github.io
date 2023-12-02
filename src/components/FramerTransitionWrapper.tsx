"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
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
    // must add initial={false} to prevent setting opacity issue when first load for seo
    // <AnimatePresence mode="wait" initial={false}>
    // {/* <motion.div
    //   // className="bg-[rgba(0,0,0,0.2)] relative"
    //   key={pathName}
    //   variants={variants}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    // >

    // </motion.div> */}
    <motion.div
      key={pathName}
      className="opacity-0 bg-[rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
    // {/* </AnimatePresence> */}
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
        delay: 0.7,
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
    <motion.div
      className={clsx("mt-2 overflow-auto scrollbar-hide")}
      variants={variants}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.div>
  );
};

export const InViewDiv = ({
  children,
  delay = 0,
  className,
}: PropsWithChildren & { delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 2,
        dealy: delay,
      }}
      ref={ref}
      className={clsx(className)}
    >
      {isInView && <div>{children}</div>}
    </motion.div>
  );
};

export const HoverDiv = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variant = {
    collapse: {
      scaleY: 0,
    },
    expand: {
      scaleY: 1,
    },
  };

  return (
    <motion.div
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
      className={clsx(className)}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className="relative w-full h-full">
        <motion.div
          variants={variant}
          animate={isHovered ? "expand" : "collapse"}
          transition={{
            duration: 0.3,
          }}
          className="absolute w-full origin-top h-full top-0 left-0 bg-red-500 -z-10"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};
