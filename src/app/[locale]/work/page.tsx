import DelayDiv from "@/components/DelayDiv";
import { ProfileInitEffect } from "@/components/FramerTransitionWrapper";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import SearchBar from "@/components/Searchbar";
import Works from "@/components/Works";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  const works = [
    {
      title: t("tms"),
      description: t("tms_description"),
      responsibility: t("tms_responsibility"),
      result: t("tms_result"),
      environemnt: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "JQuery",
        "HTML5",
        "CSS3",
        "bootstrap",
        "PHP",
        "CakePHP",
        "MySQL",
        "window10",
        "git",
        "Gitlab",
        "svn",
      ],
      image: [
        "/pics/f-login.jpg",
        "/pics/f-main.jpg",
        "/pics/f-month.jpg",
        "/pics/f-record.jpg",
        "/pics/f-form.jpg",
        "/pics/b-edit.jpg",
        "/pics/b-form.jpg",
        "/pics/b-permit.jpg",
      ],
    },
    {
      title: t("tms_resv"),
      description: t("tms_resv_description"),
      responsibility: t("tms_resv_responsibility"),
      result: t("tms_resv_result"),
      environemnt: [
        "Vue.js",
        "Vite",
        "JavaScript",
        "TypeScript",
        "JQuery",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "PHP",
        "CakePHP",
        "MySQL",
        "window10",
        "git",
        "Gitlab",
      ],
      image: ["/pics/o-main.jpg"],
    },
  ];

  return (
    <main className="flex p-8 sm:p-20 md:p-24 max-height-dvh">
      <section className="flex flex-col flex-1">
        {t("search")}
        <SearchBar className="text-xs md:text-base pb-4 w-[200px]" />
        {/* grid grid-flow-col */}
        <div className="flex justify-center flex-1 overflow-auto">
          <div className=" min-w-8 text-2xl mr-2 break-all w-8 md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <h1>{t("works")}</h1>
          </div>
          <div className="overflow-auto scrollbar-hide w-auto">
            <Works works={works} />
          </div>
        </div>
      </section>
    </main>
  );
}
