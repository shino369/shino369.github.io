"use client";

import { debounce } from "@/helper/client-utils";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
// import { MainContext } from "./ContextStore";

const Encounter = ({
  translated: { remind },
}: {
  translated: {
    remind: string;
  };
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [pressStack, setPressStack] = useState<[] | number[]>([]);

  const controls = useAnimation();
  const showText = useAnimation();

  const [isShow, setIsShow] = useState(false);
//   const { context, setter } = useContext(MainContext);

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

  const startText = useCallback(() => {
    setIsShow(true);
    showText.start({
      opacity: [0, 1, 1, 0],
      transition: {
        //   time: [0, 4, 8, 12],
        duration: 10,
      },
    });

    setTimeout(() => {
      console.log("hide");
      setIsShow(false);
    }, 10000);
  }, [showText]);

  useEffect(() => {
    startAnimate();

    showText.set({
      opacity: [0, 1, 1, 0],
      transition: {
        //   time: [0, 4, 8, 12],
        duration: 10,
      },
    });
  }, [startAnimate, showText]);

  useEffect(() => {
    if (pressStack.length > 5 && !isShow) {
      startText();
    }
  }, [pressStack, isShow, startText]);

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
    // setter({
    //   attack: true,
    // });

    // contextCleanup();
  };

//   const debouncedContextCleanup = debounce(() => {
//     setTimeout(() => {
//       if (!context.attack) {
//         console.log("clean");
//         setter({
//           attack: false,
//         });
//       }
//     }, 5000);
//   }, 2000);

//   const contextCleanup = useCallback(debouncedContextCleanup, []);

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
    <div className={clsx("flex justify-center relative cursor-punch")}>
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
        className={clsx(isHover ? "" : "character-bright", "character-shadow")}
      >
        <Image
          width={200}
          height={200}
          alt="chcracter"
          src={`/character${isPress ? "2" : ""}.png`}
        />
      </motion.div>

      <motion.div
        animate={showText}
        className="flex justify-center absolute bottom-0 translate-y-full bg-[rgba(255,255,255,0.7)] p-1 m-1 max-w-[80vw] w-[400px] rounded"
      >
        {remind}
      </motion.div>
    </div>
  );
};

export default Encounter;
