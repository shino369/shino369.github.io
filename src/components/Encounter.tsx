"use client";

import { RegisterMap, initChain } from "@/helper/animate-chain";
import { debounce } from "@/helper/client-utils";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import { useTranslations } from "next-intl";

type AvailableText =
  | "remind"
  | "stopit"
  | "greeting1"
  | "greeting2"
  | "greeting3";
const complaints: AvailableText[] = ["remind", "stopit"];
const availableText: AvailableText[] = ["greeting1", "greeting2", "greeting3"];

/**
 * character animation in main page
 */
const Encounter = () => {
  const [isHover, setIsHover] = useState(false);
  const [pressStack, setPressStack] = useState<[] | number[]>([]);
  const [triggered, setTriggered] = useState(false);
  const [freezeAction, setFreezeAction] = useState(false);
  const [currentPic, setCurrentPic] = useState(1);
  const [question, setQuestion] = useState(false);
  const [currentText, setCurrentText] = useState<AvailableText>("greeting1");
  const [carouselActive, setCarouselActive] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [isCaraShow, setIsCaraShow] = useState(true);

  const interVal = useRef<NodeJS.Timeout>();
  const timeout = useRef<NodeJS.Timeout>();
  const timeout2 = useRef<NodeJS.Timeout>();
  const chainRef = useRef<RegisterMap[]>([]);

  const controls = useAnimation();
  const showText = useAnimation();

  const t = useTranslations("page");

  const translated: { [key in AvailableText]: string } = {
    greeting1: t("greeting1"),
    greeting2: t("greeting2"),
    greeting3: t("greeting3"),
    remind: t("remind"),
    stopit: t("stopit"),
  };

  // unmount cleanup
  useEffect(() => {
    return () => {
      clearInterval(interVal.current);
      clearTimeout(timeout.current);
      clearTimeout(timeout2.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      chainRef.current?.forEach((registerd) => {
        registerd.clear();
      });
    };
  }, []);

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
        // time: [0, 4, 8, 12],
        duration: 5,
      },
    });

    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  };

  // start animation
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
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    if (!triggered) {
      setIsHover(false);
    }
  };

  const changeAction = () => {
    setTriggered(true);
    setFreezeAction(true);
    const chainaction = initChain([
      {
        name: "stop walking",
        func: () => {
          setCurrentPic(3);
          setCarouselActive(false);
        },
        duration: 500,
        delay: 500,
      },
      {
        name: "show question mark",
        func: () => {
          setQuestion(true);
        },
        duration: 2000,
      },
      {
        name: "hide character",
        func: () => {
          setIsCaraShow(false);
        },
        duration: 500,
      },
      {
        name: "change pic",
        func: () => {
          setQuestion(false);
          setCurrentPic(5);
        },
        duration: 500,
      },
      {
        name: "show character",
        func: () => {
          setIsCaraShow(true);
        },
        duration: 500,
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
          reset();
        },
        duration: 0,
      },
    ]);

    chainRef.current.push(chainaction);
  };

  const reset = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const chainaction = initChain([
        {
          name: "hide character",
          func: () => {
            setCarouselActive(true);
            setIsCaraShow(false);
          },
          duration: 500,
        },
        {
          name: "reset",
          func: () => {
            setTriggered(false);
            setCurrentPic(1);
            setIsHover(false);
            setIsCaraShow(true);
          },
          duration: 500,
        },
        {
          name: "show character",
          func: () => {
            setIsCaraShow(true);
          },
          duration: 500,
        },
      ]);
      chainRef.current.push(chainaction);
    }, 10000);
  };

  // show random text in box
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomText = useCallback(
    debounce((pressStack, isShow) => {
      if (pressStack.length > 5 && !isShow) {
        const randomComplaint =
          complaints[Math.floor(Math.random() * complaints.length)];
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
      setCurrentPic(5);
      cleanup();
      reset();
    }
  };

  useEffect(() => {
    if (!triggered) {
      interVal.current = setInterval(() => {
        setCurrentPic((p) => (p < 4 ? p + 1 : 1));
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
      <div className="absolute w-full h-full">
        <Carousel
          className="h-full"
          innerClassName="h-full"
          speed={30000}
          active={carouselActive}
        >
          <Image
            alt="city"
            src="/city.png"
            className="max-w-[1500px] filter grayscale"
            width={1500}
            height={166}
          />
        </Carousel>
      </div>

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
        className={clsx("character-shadow relative")}
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
            className="absolute top-4 -right-4 text-lg"
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
            className="absolute top-4 right-0 text-lg"
          >
            !!
          </motion.div>
        )}
        {/* dynamic src will cause refetch bug in production */}
        <div className={clsx("relative h-[200px] w-[200px]")}>
          {[1, 2, 3, 4, 5, 6].map((pic) => (
            <div
              key={pic}
              className={clsx(
                "absolute top-0",
                currentPic !== pic && "opacity-0"
              )}
            >
              <Image
                key={pic}
                className={clsx(
                  "transition-opacity",
                  isCaraShow ? "opacity-100" : "opacity-0",
                  triggered || isHover ? "" : "character-bright"
                )}
                priority
                width={200}
                height={200}
                alt="chcracter"
                src={`/character${pic}.png`}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={showText}
        className="flex justify-center md:text-2xl absolute bottom-0 translate-y-full bg-[rgba(255,255,255,0.7)] p-1 m-1 max-w-[80vw] w-[400px] rounded"
      >
        {translated[currentText]}
      </motion.div>
    </div>
  );
};

export default Encounter;
