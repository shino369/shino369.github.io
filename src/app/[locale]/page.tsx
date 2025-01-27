import Blinker from "@/components/Blinker";
import DelayDiv from "@/components/DelayDiv";
import Typing from "@/components/Typing";
import Link from "next/link";
import Encounter from "@/components/Encounter";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { InViewDiv } from "@/components/FramerTransitionWrapper";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import EmailForm from "@/components/Email";
import { SERVICES, SKILLSET, SKILLSET_ARR } from "@/constants/common";
import BgImage from "@/components/BgImage";
import { LocaleParam } from "@/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamic = "force-static";

export default async function IndexPage(props: {
  params: Promise<LocaleParam>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "page" });

  const env = {
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  };

  return (
    <main className="relative">
      <BgImage
        src="/codebg.jpg"
        alt="code background"
        width={1280}
        height={720}
        priority
      />
      <div className="w-full h-screen scroll-smooth scrollbar-hide">
        <section className="h-screen flex flex-col items-center justify-around py-8 px-4 sm:p-20 md:p-24 max-height-dvh bg-[rgba(0,0,0,0.5)]">
          <div>
            <div className="relative">
              <h1 className="text-4xl md:text-7xl p-2 bg-[rgba(255,255,255,0.3)]">
                <span className="opacity-0">{t("helloworld")}</span>
              </h1>
              <div className="text-4xl md:text-7xl p-2 absolute top-0 left-0 whitespace-nowrap">
                <Typing text={t("helloworld")} />
              </div>
              <Blinker />
            </div>
            <div className="uppercase" title="welcome to my homepage">
              <p>{t("welcome_message")}</p>
            </div>
          </div>
          <div className="relative w-full">
            <DelayDiv effect="opacity" time={1500}>
              <p className="text-center text-xl mb-2">{t("caption")}</p>
              <Encounter />
            </DelayDiv>
          </div>
          <div>
            <DelayDiv effect="opacity" time={1500}>
              <div className="uppercase text-xl md:text-2xl max-w-[80vw] overflow-hidden">
                <div className="w-full">
                  <DelayDiv effect="both" time={2000}>
                    <div className="transition-transform group/route hover:bg-[rgba(0,0,0,0.3)] hover:text-white hover:scale-90 ">
                      <Link
                        // scroll={false}
                        href="#techstack"
                        className="flex flex-col items-center justify-center p-6 "
                      >
                        {/* <div className="block delay-150  group-hover/route:hidden">
                        {t("skill")}
                      </div>
                      <div className="hidden delay-150  group-hover/route:block">
                        {t("skill")}
                      </div> */}
                        <div className="text-2xl md:text-3xl scale-x-150">
                          ▼
                        </div>
                      </Link>
                    </div>
                  </DelayDiv>
                </div>
              </div>
            </DelayDiv>
          </div>
        </section>

        <section
          className="h-screen flex flex-col items-center justify-around  py-8 sm:py-20 md:py-24 relative"
          id="techstack"
        >
          <div className="flex justify-center mb-1 md:mb-4">
            <div className="uppercase w-fit text-2xl  md:text-3xl text-center font-bold">
              <InViewDiv>
                <h2>{"<techstack/>"}</h2>
              </InViewDiv>
            </div>
          </div>
          {/* <div className="flex justify-center md:mb-10">
          <InViewDiv>
            <p
              className="text-xs md:text-xl pb-4 w-[80vw] max-w-[800px] !leading-loose text-center"
              id="resume-description"
              title="resume-description"
            >
              {t("resume_description")}
            </p>
          </InViewDiv>
        </div> */}

          <InViewDiv className="w-full h-fit">
            <Carousel
              className="h-[96px] min-h-[96px] md:h-[128px] md:min-h-[128px] bg-[rgba(123,123,123,0.5)] md:mb-10"
              speed={30000}
            >
              {SKILLSET_ARR.filter((s) => s[1]).map((skill) => (
                <a
                  href={`/${locale}/work?search=${skill[0]}`}
                  key={skill[0]}
                  className="w-[128px] md:w-[160px] px-2 max-h-[80px] h-[80px] md:h-[96px] md:max-h-[96px] flex items-center filter contrast-50 hover:contrast-100"
                >
                  <div className="flex flex-col items-center character-shadow">
                    <Image
                      className="w-auto h-[64px] md:h-[80px]"
                      alt={skill[0]}
                      width={128}
                      height={128}
                      src={skill[1]}
                    />
                  </div>

                  {/* <div className="text-center capitalize font-sans text-xs md:text-sm text-black ">
                  {skill[0]}
                </div> */}
                </a>
              ))}
            </Carousel>
          </InViewDiv>

          {/* <div className="flex justify-center mb-2">
          <div className="uppercase w-fit text-2xl md:text-3xl text-center font-bold">
            <InViewDiv>
              <h2>{"<Service/>"}</h2>
            </InViewDiv>
          </div>
        </div> */}

          <InViewDiv className="w-full flex justify-center mb-6">
            <ListWrapper
              className="flex flex-wrap justify-center max-w-[calc(80vw+2rem)] md:max-w-[1600px] p-2 md:p-4"
              variant={{
                open: {
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 1.5,
                    delay: 0.5,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {SERVICES.map((cando, i) => (
                <ListItem
                  key={cando.name}
                  className="flex relative w-[450px] justify-start text-xs md:text-lg hover:text-white rounded-xl shadow-md m-2 md:m-4 h-32 md:h-60 group overflow-hidden"
                >
                  <div className="relative rounded-s-xl w-40 flex justify-center px-2 h-full items-center text-center break-all overflow-hidden  group-hover:text-white font-bold text-black">
                    <div className="absolute w-full h-full bg-[rgba(255,255,255,0.8)] origin-right top-0 left-0 -z-10 transition-transform duration-300 scale-x-100 group-hover:scale-x-0" />
                    <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] origin-left top-0 left-0 -z-10 transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                    {t(cando.name)}
                  </div>

                  <BgImage
                    wrapperClassName="rounded-e-xl overflow-hidden group-hover:scale-125 transition-transform duration-300"
                    opacity="opacity-90"
                    contrast={false}
                    src={cando.img}
                    alt="code background"
                    width={720}
                    height={320}
                    priority
                  />
                </ListItem>
              ))}
            </ListWrapper>
          </InViewDiv>

          <InViewDiv>
            <DelayDiv effect="opacity" time={1000}>
              <div className="uppercase text-xl md:text-2xl max-w-[80vw] overflow-hidden">
                <ul className="w-full">
                  <DelayDiv effect="both" time={1000}>
                    <li className="transition-transform group/route hover:bg-[rgba(0,0,0,0.3)] hover:text-white hover:scale-90 ">
                      <Link
                        // scroll={false}
                        href="#more"
                        className="flex flex-col items-center justify-center p-6"
                      >
                        {/* <div className="block delay-150  group-hover/route:hidden">
                        {t("more")}
                      </div>
                      <div className="hidden delay-150  group-hover/route:block">
                        {t("contact")}
                      </div> */}
                        <div className="text-2xl md:text-3xl scale-x-150">
                          ▼
                        </div>
                      </Link>
                    </li>
                  </DelayDiv>
                </ul>
              </div>
            </DelayDiv>
          </InViewDiv>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-around pb-16 py-8 sm:py-20 md:py-24 max-height-dvh bg-[rgb(33,33,33)]"
          id="more"
        >
          <div className="flex justify-center mb-1 md:mb-4">
            <div className="uppercase w-fit text-2xl  md:text-3xl text-center font-bold">
              <InViewDiv>
                <h2>{"<Detail/>"}</h2>
              </InViewDiv>
            </div>
          </div>

          <InViewDiv
            withBorder
            className="min-w-[calc(80vw+2rem)] md:min-w-max "
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center mb-4">
                <div className="uppercase text-xl max-w-[80vw]">
                  <InViewDiv>
                    <ul className="w-60">
                      <DelayDiv effect="both" time={500}>
                        {[
                          {
                            label: t("_profile"),
                            hover: t("_profile"),
                            href: "profile",
                          },
                          {
                            label: t("_resume"),
                            hover: t("_resume"),
                            href: "resume",
                          },
                          {
                            label: t("works"),
                            hover: t("works"),
                            href: "work",
                          },
                        ].map((t) => (
                          <li
                            key={t.label}
                            className="transition-transform group/route hover:bg-[rgba(144,144,144,0.3)] hover:text-white hover:scale-90 p-4 mx-4"
                          >
                            <Link
                              href={`/${locale}/${t.href}`}
                              className="flex items-center justify-center"
                            >
                              <div className="block delay-150  group-hover/route:hidden">
                                {t.label}
                              </div>
                              <div className="hidden delay-150  group-hover/route:block">
                                {t.hover}
                              </div>
                              <div className="text-xl ml-4">{"▶"}</div>
                            </Link>
                          </li>
                        ))}
                      </DelayDiv>
                    </ul>
                  </InViewDiv>
                </div>
              </div>
            </div>
          </InViewDiv>

          <div className="p-4 shadow-md  rounded-xl relative">
            <BgImage
              wrapperClassName="rounded-xl overflow-hidden"
              src="/contactbg.jpg"
              alt="code background"
              width={720}
              height={320}
              priority
            />

            <InViewDiv>
              <EmailForm env={env} />
            </InViewDiv>
          </div>
        </section>
      </div>
    </main>
  );
}
