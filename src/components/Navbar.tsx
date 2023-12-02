"use client";

import { throttle } from "@/helper/client-utils";
import clsx from "clsx";
import { /*ReactNode,*/ useCallback, useState } from "react";
import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { NavPath } from "@/types";
import Image from "next/image";
import { Locale } from "@/middleware";
import ToggleButton from "./ToggleButton";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setParticle } from "@/redux/reducer/commonSlice";

//svg
import gear from "@/assets/gear.svg";

export const Navbar = ({
  // children,
  paths,
  locale,
}: {
  // children: ReactNode;
  paths: NavPath[];
  locale: Locale;
}) => {
  const [toggleState, setToggleState] = useState("");
  const { particleInteractive, particleActive } = useAppSelector(
    (rootState) => rootState.common
  );
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggle = useCallback(
    throttle(() => {
      setToggleState((pre) =>
        pre !== "expanding" ? "expanding" : "collapsing"
      );
    }, 750),
    []
  );

  return (
    <div className="fixed z-50 top-0 right-0">
      {/* nav toggle button */}
      <div className="cursor-pointer active:scale-90 focus:scale-90 hover:scale-90 transition-transform">
        <div
          onClick={toggle}
          className={clsx(
            "top-0 right-0 rounded mt-4 mr-4 navbar w-9 h-9 md:h-10 md:w-10 p-1  opacity-75 flex justify-center items-center"
          )}
        >
          <Image className="spinning filter dark:invert" src={gear} alt="gear" />
        </div>
      </div>

      {/* main menu */}
      <div
        className={clsx(
          "menu top-0 -z-10 right-0 flex flex-col items-center justify-around px-2 py-1 rounded text-white uppercase",
          toggleState
        )}
      >
        {/* page navigation */}
        <nav className=" text-xl md:text-2xl">
          <ul>
            {paths.map((p, i) => (
              <li key={p.path} className="mb-2 link">
                <Link
                  href={"/" + locale + "/" + p.path}
                  onClick={() => {
                    setToggleState("collapsing");
                  }}
                >
                  <div className="transition-transform hover:translate-x-2"> {p.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* i18n switcher */}
        <section className="">
          <LocaleSwitcher
            toggle={() => {
              setToggleState("collapsing");
            }}
          />
        </section>
        {/* toggel bg particle effect */}
        <section>
          <ToggleButton
            className="text-sm p-2"
            label="BG effect"
            onToggle={() => {
              dispatch(
                setParticle({
                  particleActive: !particleActive,
                })
              );
            }}
            isChecked={particleActive}
          />
          <ToggleButton
            className="text-sm p-2"
            label="BG interactive"
            onToggle={() => {
              dispatch(
                setParticle({
                  particleInteractive: !particleInteractive,
                })
              );
            }}
            isChecked={particleInteractive}
          />
        </section>
      </div>
    </div>
  );
};
