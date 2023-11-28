import DelayDiv from "@/components/DelayDiv";
import { ProfileInitEffect } from "@/components/FramerTransitionWrapper";
import { LocaleParam } from "@/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import Image from "next/image";

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex flex-col items-center justify-center p-8 sm:p-20 md:p-24 max-height-dvh">
      {/* {
        [1,2,3,4,5,6].map(t => <div className="w-[300px] min-h-[500px] bg-black mb-2"  key={t}>{t}</div>)
      } */}
      <div className="border-b-4 pb-2 border-b-black dark:border-b-white ">
        <h1>{t("_profile")}</h1>
      </div>
      <ProfileInitEffect>
        <div className="flex justify-center mb-2">
          <Image
            src="/profile.jpg"
            alt="character3"
            width={300}
            height={300}
          />
        </div>

        <div className="text-center mb-2">Anthony Wong</div>

        <DelayDiv effect="opacity" time={3000}>
          <div className="max-w-[400px] p-4 rounded bg-[rgba(0,0,0,0.2)]">
            <p className="mb-2">
              Otaku who love Japanese ACG contents. Came
              from Hong Kong. moved to Japan in late 2023.
            </p>
            <p>
              Enjoy a wide variety of video games, from action RPG to
              AVG/galgame. Favorite game series is Darksouls.
            </p>
            <p>
              Interested in generative AI, especially image generation. Will
              play around whenever free. This profile pic is made with Bing Dall-E 3.
            </p>
          </div>
        </DelayDiv>
      </ProfileInitEffect>
    </main>
  );
}
