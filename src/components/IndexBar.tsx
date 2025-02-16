"use client";

import useMediaQuery from "@/helper/useMediaQuery";
import { useOutsideClick } from "@/helper/useOutsideClick";
import { setHash } from "@/redux/reducer/commonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import clsx from "clsx";
import { RefObject, useLayoutEffect, useState } from "react";

export default function IndexBar() {
  const [show, setShow] = useState(true);
  const currentHash = useAppSelector(
    (rootState) => rootState.common.currentHash
  );
  const dispatch = useAppDispatch();
  const isMD = useMediaQuery("(min-width: 768px)");
  const ref = useOutsideClick(() => {
    setShow(false);
  });

  useLayoutEffect(() => {
    if (window.location.hash && window.location.hash.length > 0) {
      const cut = window.location.hash.split("#")[1];
      dispatch(setHash(cut));
    }
  }, [dispatch]);

  return (
    <nav
      {...(isMD
        ? {}
        : {
            ref: ref as RefObject<HTMLDivElement | null>,
          })}
      className={clsx(
        "fixed transition-transform top-10 left-0 mt-2 flex items-center",
        show ? "" : "translate-x-[-90%]"
      )}
    >
      <ul
        className={clsx(
          "flex flex-col bg-[rgb(203,213,225,0.7)] max-h-[80dvh] overflow-auto scrollbar-hide shadow-xl text-white p-2 rounded-xl  origin-left ab"
        )}
      >
        {[
          {
            id: "greetings",
            label: "挨拶",
          },
          {
            id: "self-intro",
            label: "自己紹介",
          },
          {
            id: "university",
            label: "大学について",
          },
          {
            id: "reason-of-resign",
            label: "転職の理由",
          },

          {
            id: "reason-to-japan",
            label: "日本に来る理由",
          },
          {
            id: "sep-to-nov",
            label: "9～11月今まで",
          },
          {
            id: "why-hire",
            label: "Why should we hire you?",
          },
          {
            id: "siboudouki-rakuten",
            label: "志望動機---Rakuten",
          },
          {
            id: "job-in-shiji",
            label: "前職について(Shiji)",
          },
          {
            id: "job-in-linkx",
            label: "前職について(LinkX)",
          },
          {
            id: "challenging-task",
            label: "最も挑戦的だったタスク",
          },
          {
            id: "learn-new-tech",
            label: "新しい技術を学ぶ",
          },
          {
            id: "lead-project",
            label: "リーダー経験",
          },
          {
            id: "choice-of-tech",
            label: "技術の選定基準",
          },
          {
            id: "react-pos-con",
            label: "Reactの優/劣",
          },
          {
            id: "strength",
            label: "強み",
          },
          {
            id: "weakness",
            label: "欠点",
          },
          {
            id: "pressure-deadline",
            label: "work under pressure",
          },
          {
            id: "keepup-changes",
            label: "keep up to tech news",
          },
          {
            id: "explain-tech",
            label: "explain tech",
          },
          {
            id: "handle-conflict",
            label: "handle conflict",
          },
          {
            id: "success-fail",
            label: "最大の成果・失敗",
          },
          {
            id: "question",
            label: "聞きたいこと",
          },
          {
            id: "salary",
            label: "希望年収",
          },
          {
            id: "time-available",
            label: "入社可能時期",
          },
          {
            id: "other-interview",
            label: "他社の選考状況",
          },
        ].map((index) => (
          <li
            key={index.id}
            className={clsx(
              " mx-2 rounded-xl px-2 w-fit my-1 md:my-2",
              currentHash === index.id ? "bg-yellow-500" : "bg-red-400"
            )}
          >
            <a
              href={"#" + index.id}
              onClick={() => {
                dispatch(setHash(index.id));
              }}
            >
              {index.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={clsx(
          "bg-[rgb(203,213,225,0.8)] shadow-xl text-white p-2 rounded-e-xl h-fit text-2xl font-bold cursor-pointer"
        )}
        onClick={() => {
          setShow((p) => !p);
        }}
      >
        {show ? "-" : "+"}
      </div>
    </nav>
  );
}
