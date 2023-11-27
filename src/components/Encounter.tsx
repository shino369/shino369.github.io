"use client";
import { debounce } from "@/helper/client-utils";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Encounter = () => {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [pressStack, setPressStack] = useState<[] | number[]>([]);

  const controls = useAnimation();

  const startAnimate = useCallback(() => {
    controls.start({
      y: [0, 3, 0, -3],
      scaleX: [1, 0.95, 1, 1.05],
      transition: {
        repeat: Infinity,
        duration: 2,
        times: [0, 0.8, 1.4, 2],
        repeatDelay: 0.5,
      },
    });
  }, [controls]);

  useEffect(() => {
    startAnimate();
  }, [startAnimate]);

  const handleHoverStart = () => {
    // controls.stop();
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    // startAnimate();
    setIsHover(false);
  };

  const handlePress = () => {
    setIsPress(true);
    setPressStack((p) => [...p, 1]);
  };

  const handleRelease = () => {
    setIsPress(false);
    cleanup();
  };

  const debouncedCleanup = debounce(() => {
    setTimeout(() => {
      console.log("clear arr");
      setPressStack([]);
    }, 1000);
  }, 1000);

  const cleanup = useCallback(debouncedCleanup, []);

  return (
    <div
      className={clsx(
        "flex justify-center character-shadow relative cursor-punch",
        isHover ? "" : "character-bright"
      )}
    >
      {pressStack.map((s, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [1, 0],
            y: [10, -20],
            transition: {
              duration: 2,
              ease: "linear",
            },
          }}
          className="absolute top-0 right-[10%] md:right-1/4"
        >
          - 10 HP
        </motion.div>
      ))}

      <motion.div
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onTouchStart={handlePress}
        onTouchEnd={handleRelease}
        onMouseDown={handlePress}
        onMouseUp={handleRelease}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <Image
          width={200}
          height={200}
          alt="chcracter"
          src={`/character${isPress ? "2" : ""}.png`}
        />
      </motion.div>
    </div>
  );
};

export default Encounter;
