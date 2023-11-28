"use client";

import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, duration: 0.7, type: "spring" },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, duration: 0.7, type: "spring" },
    },
  },
};

const variants2 = {
  open: {
    width: "auto",
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1.5,
      delay: 0.5,
      //   type: "spring",
    },
  },
  closed: {
    width: 0,
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      // type: "spring"
    },
  },
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li
      variants={variants}
      //   whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.li>
  );
};

export const ListWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.ul
      variants={variants2}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  );
};
