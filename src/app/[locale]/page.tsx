import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Blinker from "@/components/Blinker";
import DelayDiv from "@/components/DelayDiv";
import Typing from "@/components/Typing";
import Link from "next/link";
import Encounter from "@/components/Encounter";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { HoverDiv, InViewDiv } from "@/components/FramerTransitionWrapper";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import EmailForm from "@/components/Email";

export default function IndexPage({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  const env = {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-around p-8 sm:p-20 md:p-24 max-height-dvh">
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
            <p>{t("welcome_message")}</p>
          </div>
        </header>
        <div className="relative w-full">
          <DelayDiv effect="opacity" time={1500}>
            <p className="text-center text-xl mb-2">{t("caption")}</p>
            <Encounter
              translated={{
                greeting1: t("greeting1"),
                greeting2: t("greeting2"),
                greeting3: t("greeting3"),
                remind: t("remind"),
                stopit: t("stopit"),
              }}
            />
          </DelayDiv>
        </div>
        <div>
          <DelayDiv effect="opacity" time={1500}>
            <div className="uppercase text-2xl max-w-[80vw] overflow-hidden">
              <ul className="w-full">
                <DelayDiv effect="both" time={2000}>
                  <li className="transition-transform group/route hover:bg-[rgba(0,0,0,0.3)] hover:text-white px-1 hover:scale-90 ">
                    <Link
                      // scroll={false}
                      href="#techstack"
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="block delay-150  group-hover/route:hidden">
                        {t("skill")}
                      </div>
                      <div className="hidden delay-150  group-hover/route:block">
                        {t("resume")}
                      </div>
                      <div className="text-3xl scale-x-150">v</div>
                    </Link>
                  </li>
                </DelayDiv>
              </ul>
            </div>
          </DelayDiv>
        </div>
      </section>

      <section className="py-4 pb-20" id="techstack">
        <div className="flex justify-center mb-2">
          <div className="uppercase w-fit text-2xl text-center font-bold">
            <InViewDiv>{"<techstack/>"}</InViewDiv>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <InViewDiv>
            <p
              className="text-xs md:text-base pb-4 w-[80vw] max-w-[800px]"
              id="resume-description"
              title="resume-description"
            >
              {t("resume_description")}
            </p>
          </InViewDiv>
        </div>

        <Carousel
          className="h-[96px] md:h-[128px] bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.5)] mb-24"
          speed={30000}
        >
          {[
            "js",
            "ts",
            "react",
            "reactnative",
            "next",
            "redux",
            "angular",
            "vue",
            "vite",
            "tailwindcss",
            "java",
            "springboot",
            "php",
            "cakephp",
          ].map((skill) => (
            <div
              className="p-2 mx-2 text-lg  text-white flex items-center filter contrast-50 hover:contrast-100 "
              key={skill}
            >
              <Link href={`/${locale}/work?search=${skill}`}>
                <Image
                  alt={skill}
                  width={128}
                  height={128}
                  className="w-auto min-w-[64px] max-h-[64px] md:min-w-[96px] md:max-h-[96px] object-contain"
                  src={`/logo/${skill}-logo.svg`}
                />
              </Link>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center mb-2">
          <div className="uppercase w-fit text-2xl text-center font-bold">
            <InViewDiv>{"<Service/>"}</InViewDiv>
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <InViewDiv className="w-full flex justify-center">
            <ListWrapper
              className="grid grid-cols-2 w-full max-w-[800px]"
              variant={{
                open: {
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 1.5,
                    delay: 0.5,
                    //   type: "spring",
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                    // type: "spring"
                  },
                },
              }}
            >
              {["spa", "staticsite", "mobileapp", "api"].map((cando) => (
                <ListItem key={cando} className="flex justify-center">
                  <div className="m-3 relative max-w-[40vw] max-h-[40vw] w-40 h-40 text-center break-all p-2 overflow-hidden">
                    <HoverDiv className="absolute w-full h-full top-0 left-0" />
                    {t(cando)}
                  </div>
                </ListItem>
              ))}
            </ListWrapper>
          </InViewDiv>
        </div>
        <div className="flex justify-center mb-6">
          <div className="uppercase w-fit text-2xl text-center font-bold">
            <InViewDiv>{"<Detail/>"}</InViewDiv>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="uppercase text-xl max-w-[80vw]">
            <InViewDiv>
              <ul className="w-full">
                <DelayDiv effect="both" time={2000}>
                  <li className="transition-transform group/route hover:bg-[rgba(0,0,0,0.3)] hover:text-white px-1 hover:scale-90 ">
                    <Link
                      // scroll={false}
                      href={`/${locale}/resume`}
                      className="flex items-center justify-center"
                    >
                      <div className="block delay-150  group-hover/route:hidden">
                        {t("_profile")}
                      </div>
                      <div className="hidden delay-150  group-hover/route:block">
                        {t("resume")}
                      </div>
                      <div className="text-xl scale-x-150 ml-2">{"->"}</div>
                    </Link>
                  </li>
                  <li className="transition-transform group/route hover:bg-[rgba(0,0,0,0.3)] hover:text-white px-1 hover:scale-90 ">
                    <Link
                      // scroll={false}
                      href={`/${locale}/profile`}
                      className="flex items-center justify-center"
                    >
                      <div className="block delay-150  group-hover/route:hidden">
                        {t("_resume")}
                      </div>
                      <div className="hidden delay-150  group-hover/route:block">
                        {t("resume")}
                      </div>
                      <div className="text-xl scale-x-150 ml-2">{"->"}</div>
                    </Link>
                  </li>
                </DelayDiv>
              </ul>
            </InViewDiv>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <InViewDiv>
          <EmailForm env={env} />
        </InViewDiv>
      </section>
    </main>
  );
}
