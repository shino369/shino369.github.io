import DelayDiv from "@/components/DelayDiv";
import { ProfileInitEffect } from "@/components/FramerTransitionWrapper";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
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

        <h2 className="text-center text-xl font-bold mb-2">Anthony Wong</h2>

        <DelayDiv effect="opacity" time={1000}>
          <div className="max-w-[400px] p-4 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.5)]">
            <p className="whitespace-pre-wrap md:text-xl">
              {t('profile_description')}
            </p>
          </div>
        </DelayDiv>
      </ProfileInitEffect>
    </main>
  );
}
