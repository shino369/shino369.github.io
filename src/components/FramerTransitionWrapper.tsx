"use client";

import clsx from "clsx";
import {
  // AnimatePresence,
  motion,
  useInView,
} from "motion/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode, useRef, useState } from "react";
export const PageTransitionWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathName = usePathname();

  return (
    <motion.div
      key={pathName}
      className="opacity-0 bg-[rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
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
      className={clsx("mt-2 overflow-auto scrollbar-hide ")}
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
  withBorder = false,
}: PropsWithChildren & {
  delay?: number;
  className?: string;
  withBorder?: boolean;
}) => {
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
      className={clsx(
        className,
        withBorder ? "border-effect border-effect-color" : "",
        withBorder && isInView ? "border-effect-active" : ""
      )}
    >
      {isInView && <div>{children}</div>}
    </motion.div>
  );
};

export const HoverDiv = ({
  children,
  className,
  even,
}: PropsWithChildren & { className?: string; even: boolean }) => {
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
          className={clsx(
            "absolute w-full origin-top h-full top-0 left-0 -z-10",
            even ? "bg-dark-black" : "bg-red-500"
          )}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};
