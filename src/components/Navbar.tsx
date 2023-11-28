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
import sword from "@/assets/sword.svg";


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
      <div className="cursor-pointer active:scale-90 focus:scale-90 hover:scale-90 transition-transform">
        <div
          onClick={toggle}
          className={clsx(
            "bg-slate-500 top-0 right-0 rounded mt-4 mr-4 navbar w-6 h-6 p-1 spinning opacity-75 flex justify-center items-center"
          )}
        >
          <Image src={sword} alt="sword" />
        </div>
      </div>

      <div
        className={clsx(
          "menu top-0 -z-10 right-0 flex flex-col items-center justify-around px-2 py-1 rounded text-white uppercase",
          toggleState
        )}
      >
        <nav className=" text-xl">
          <ul>
            {paths.map((p, i) => (
              <li key={p.path} className="mb-2 link">
                <Link
                  href={"/" + locale + "/" + p.path}
                  onClick={() => {
                    setToggleState("collapsing");
                  }}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="">
          <LocaleSwitcher
            toggle={() => {
              setToggleState("collapsing");
            }}
          />
        </section>
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
