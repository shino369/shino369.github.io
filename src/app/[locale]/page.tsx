import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Blinker from "@/components/Blinker";
import DelayDiv from "@/components/DelayDiv";
import Typing from "@/components/Typing";
import Link from "next/link";
import Encounter from "@/components/Encounter";

export default function IndexPage({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex flex-col items-center justify-around p-8 sm:p-20 md:p-24 max-height-dvh">
      <header>
        <div className="relative">
          <h1 className="text-4xl md:text-8xl p-2 bg-[rgba(255,255,255,0.3)]">
            <span className="opacity-0">{t("helloworld")}</span>
          </h1>
          <div className="text-4xl md:text-8xl p-2 absolute top-0 left-0 whitespace-nowrap">
            <Typing text={t("helloworld")} />
          </div>
          <Blinker />
        </div>
        <div className="uppercase" title="welcome to my homepage">
          <p>{t('welcome_message')}</p>
        </div>
      </header>
      <section>
        <DelayDiv effect="opacity" time={2500}>
          <p className="text-center text-xl mb-2">{t("caption")}</p>
          <Encounter
            translated={{
              remind: t("remind"),
            }}
          />
        </DelayDiv>
      </section>
      <section>
        <DelayDiv effect="opacity" time={2500}>
          <div className="uppercase text-2xl max-w-[80vw] text-slate-400 w-[400px] text-center flex flex-col items-center justify-around border-slate-200 border-4 rounded-xl shadow-md h-[100px] shadow-slate-400 bg-[rgb(43,43,43)] overflow-hidden">
            <ul className="w-full">
              <DelayDiv effect="both" time={2500}>
                <li className="transition-transform group/route hover:bg-black hover:text-white px-1 hover:scale-125">
                  <Link
                    href={"/" + locale + "/profile"}
                    className="flex justify-center"
                  >
                    <div className="block delay-150  group-hover/route:hidden">
                      {t("profile")}
                    </div>
                    <div className="hidden delay-150  group-hover/route:block">
                      {t("_profile")}
                    </div>
                  </Link>
                </li>
              </DelayDiv>
              <DelayDiv effect="both" time={2700}>
                <li className="transition-transform group/route hover:bg-black hover:text-white px-1 hover:scale-125">
                  <Link
                    href={"/" + locale + "/resume"}
                    className="flex justify-center"
                  >
                    <div className="block delay-150  group-hover/route:hidden">
                      {t("resume")}
                    </div>
                    <div className="hidden delay-150  group-hover/route:block">
                      {t("_resume")}
                    </div>
                  </Link>
                </li>
              </DelayDiv>
            </ul>
          </div>
        </DelayDiv>
      </section>
    </main>
  );
}
