"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const Typing = ({ text }: { text: string }) => {
  const [newText, setNewText] = useState("");
  const [blinkState, setBlinkState] = useState(true);
  const intervalRef = useRef<null | NodeJS.Timeout>(undefined);
  const interval2Ref = useRef<null | NodeJS.Timeout>(undefined);

  useEffect(() => {
    const splited = text.split("");
    intervalRef.current = setInterval(() => {
      // console.log('interval called')
      if (splited.length === 0) {
        intervalRef.current && clearInterval(intervalRef.current);
        interval2Ref.current = setInterval(() => {
          setBlinkState((prev) => !prev);
        }, 600);
      } else {
        const letter = splited.shift()
        // console.log(letter)
        setNewText((prev) => prev + letter);
      }
    }, 150);

    return () => {
      // cleanup
      intervalRef.current && clearInterval(intervalRef.current);
      interval2Ref.current && clearInterval(interval2Ref.current);
      setNewText("");
    }
  }, [text]);

  return (
    <span>
      {newText.split("").map((t, i) => (
        <span
          key={i}
          className={clsx(
            i === newText.length - 1 && blinkState ? "text-white bg-black" : ""
          )}
        >
          {t}
        </span>
      ))}
    </span>
  );
};

export default Typing;
