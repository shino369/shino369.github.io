import SearchBar from "@/components/Searchbar";
import Works from "@/components/Works";
import {
  isTranslationModel,
  isWorkProps,
  LocaleParam,
  TranslationModel,
  WorkProps,
} from "@/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import BgImage from "@/components/BgImage";
import { WORKS } from "@/constants/common";
import { translateArr } from "@/helper/utils";

export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<LocaleParam>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("works"),
    description: t("works"),
  };
}

export default async function Page(props: { params: Promise<LocaleParam> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  console.log("locale", locale);
  const t = await getTranslations({ locale, namespace: "page" });

  // the lower component is client side. Need to handle translate here
  const works: WorkProps[] = translateArr<WorkProps>(WORKS, t, isWorkProps);

  return (
    <main className="flex py-8 px-4 sm:p-20 md:p-24 max-height-dvh relative">
      <BgImage
        src="/workbg.jpg"
        alt="code background"
        width={1280}
        height={720}
        priority
      />
      <section className="flex flex-col flex-1 max-w-full">
        {t("search")}
        <Suspense
          fallback={
            <div className="text-xs md:text-base pb-4 w-[200px]">
              <input className="h-full w-full text-lg focus:outline-gray-500 p-1 bg-[rgba(255,255,255,0.8)] rounded" />
            </div>
          }
        >
          <SearchBar className="text-xs md:text-base pb-4 w-[200px]" />
        </Suspense>

        <div className="flex justify-center flex-1 overflow-auto">
          <div className=" min-w-8 text-2xl mr-2 break-all w-8 md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <h1>{t("works")}</h1>
          </div>
          <div className="overflow-auto scrollbar-hide w-auto max-w-5xl bg-[rgb(37,37,38,0.75)] border-2 rounded-md border-[#d3d3d3]">
            <Suspense fallback={<></>}>
              <Works works={works} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
