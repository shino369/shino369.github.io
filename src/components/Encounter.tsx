"use client";

import { chainAction } from "@/helper/animate-chain";
import { debounce } from "@/helper/client-utils";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
// import { MainContext } from "./ContextStore";

const complaints = ["remind", "stopit", "bored"];

const availableText = ["greeting1", "greeting2", "greeting3"];

const Encounter = ({
  translated,
}: {
  translated: {
    [key: string]: string;
  };
}) => {
  const [isHover, setIsHover] = useState(false);
  // const [isPress, setIsPress] = useState(false);
  const [pressStack, setPressStack] = useState<[] | number[]>([]);
  const [triggered, setTriggered] = useState(false);
  const [freezeAction, setFreezeAction] = useState(false);
  const [currentPic, setCurrentPic] = useState(1);
  const [question, setQuestion] = useState(false);
  const [currentText, setCurrentText] = useState("greeting1");
  const interVal = useRef<NodeJS.Timeout>();
  const timeout = useRef<NodeJS.Timeout>();
  const timeout2 = useRef<NodeJS.Timeout>();

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

  const startText = () => {
    setIsShow(true);
    showText.start({
      opacity: [0, 1, 1, 0],
      transition: {
        //   time: [0, 4, 8, 12],
        duration: 3,
      },
    });

    setTimeout(() => {
      // console.log("hide");
      setIsShow(false);
    }, 3000);
  };

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

  const handleHoverStart = () => {
    // controls.stop();
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    // startAnimate();
    if (!triggered) {
      setIsHover(false);
    }
  };

  const changeAction = () => {
    setTriggered(true);
    setFreezeAction(true);
    chainAction([
      {
        name: "stop walking",
        func: () => {
          setCurrentPic(3);
        },
        duration: 500,
        delay: 500,
      },
      {
        name: "show question mark",
        func: () => {
          setQuestion(true);
        },
        duration: 3000,
      },
      {
        name: "change pic",
        func: () => {
          setQuestion(false);
          setCurrentPic(5);
        },
        duration: 1000,
      },
      {
        name: "unfreeze",
        func: () => {
          setFreezeAction(false);
        },
        delay: 300,
        duration: 0,
      },
      {
        name: "show greet",
        func: () => {
          setCurrentText("greeting1");
          startText();
        },
        duration: 0,
      },
    ]);
  };

  const reset = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      // console.log("reset");
      setTriggered(false);
      setCurrentPic(1);
      setIsHover(false);
    }, 10000);
  };

  const randomText = useCallback(
    debounce((pressStack, isShow) => {
      // console.log(isShow);
      if (pressStack.length > 5 && !isShow) {
        const randomComplaint =
          complaints[Math.floor(Math.random() * complaints.length)];
        // console.log(randomComplaint);
        setCurrentText(randomComplaint);
        startText();
      }
      if (pressStack.length < 6 && !isShow) {
        const randomText =
          availableText[Math.floor(Math.random() * availableText.length)];
        setCurrentText(randomText);
        startText();
      }
    }, 500),
    []
  );

  const handlePress = () => {
    clearTimeout(timeout.current);
    // setIsPress(true);
    if (!triggered && !freezeAction) {
      changeAction();
    }

    if (currentPic >= 5 && !freezeAction) {
      randomText(pressStack, isShow);
      setPressStack((p) => [...p, 1]);
      setCurrentPic(6);
      clearInterval(interVal.current);
      reset();
    }
  };

  const handleRelease = () => {
    if (triggered && !freezeAction) {
      // console.log("release");
      setCurrentPic(5);
      cleanup();
      reset();
    }
  };

  useEffect(() => {
    if (!triggered) {
      interVal.current = setInterval(() => {
        setCurrentPic((p) => {
          if (p < 4) {
            return p + 1;
          } else {
            return 1;
          }
        });
      }, 1000);

      return () => {
        clearInterval(interVal.current);
      };
    }
  }, [triggered]);

  const cleanup = () => {
    clearTimeout(timeout2.current);
    timeout2.current = setTimeout(() => {
      // console.log("clear stack");
      setPressStack([]);
    }, 2000);
  };

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

      {question && (
        <motion.div
          animate={{
            opacity: [0, 1, 0, 1, 0],
            transition: {
              duration: 2,
              ease: "linear",
            },
          }}
          className="absolute top-4 right-20 md:right-1/4 text-lg"
        >
          ??
        </motion.div>
      )}

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
          src={`/character${currentPic}.png`}
        />
      </motion.div>

      <motion.div
        animate={showText}
        className="flex justify-center absolute bottom-0 translate-y-full bg-[rgba(255,255,255,0.7)] p-1 m-1 max-w-[80vw] w-[400px] rounded"
      >
        {translated[currentText]}
      </motion.div>
    </div>
  );
};

export default Encounter;
