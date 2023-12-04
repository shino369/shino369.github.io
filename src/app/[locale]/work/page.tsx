import SearchBar from "@/components/Searchbar";
import Works from "@/components/Works";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import Image from 'next/image'

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
        "Redux",
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
        "/pics/shiji/tms/1.jpg",
        "/pics/shiji/tms/1-2.jpg",
        // "/pics/shiji/tms/2.jpg",
        "/pics/shiji/tms/3.jpg",
        "/pics/shiji/tms/4.jpg",
        // "/pics/shiji/tms/5.jpg",
        // "/pics/shiji/tms/6.jpg",
        // "/pics/shiji/tms/7.jpg",
        // "/pics/shiji/tms/8.jpg",
        // "/pics/shiji/tms/9.jpg",
        // "/pics/shiji/tms/10.jpg",
        // "/pics/shiji/tms/11.jpg",
        // "/pics/shiji/tms/12.jpg",
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
      image: [
        "/pics/shiji/tms/1.jpg",
        "/pics/shiji/resv/1.jpg",
        // "/pics/shiji/resv/2.jpg",
      ],
    },
    {
      title: t("hkc"),
      url: ["https://www.thehongkongclub.hk/public/library.html"],
      description: t("hkc_description"),
      responsibility: t("hkc_responsibility"),
      result: t("hkc_result"),
      environemnt: [
        "Angular",
        "Rxjs",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "macOS",
        "git",
        "Bitbucket",
        "Jenkin",
        "docker",
      ],
      image: [
        "/pics/appicidea/hkc/1.jpg",
        "/pics/appicidea/hkc/2.jpg",
        "/pics/appicidea/hkc/3.jpg",
        "/pics/appicidea/hkc/4.jpg",
        "/pics/appicidea/hkc/5.jpg",
        "/pics/appicidea/hkc/6.jpg",
        "/pics/appicidea/hkc/7.jpg",
        "/pics/appicidea/hkc/8.jpg",
        "/pics/appicidea/hkc/9.jpg",
        "/pics/appicidea/hkc/10.jpg",
        "/pics/appicidea/hkc/11.jpg",
        "/pics/appicidea/hkc/12.jpg",
      ],
    },
    {
      title: t("3tech"),
      url: ["https://www.3tech.net/index.php?c=category&id=8"],
      description: t("3tech_description"),
      responsibility: t("3tech_responsibility"),
      result: t("3tech_result"),
      environemnt: [
        "Angular",
        "Rxjs",
        "JavaScript",
        "TypeScript",
        "ant design",
        "HTML5",
        "CSS3",
        "Java",
        "spring boot",
        "mybatis",
        "macOS",
        "git",
        "gitlab",
      ],
      image: [
        "/pics/appicidea/3tech/0.jpg",
        "/pics/appicidea/3tech/1.jpg",
        "/pics/appicidea/3tech/2.jpg",
        "/pics/appicidea/3tech/3.jpg",
        // "/pics/appicidea/3tech/4.jpg",
        // "/pics/appicidea/3tech/5.jpg",
        "/pics/appicidea/3tech/6.jpg",
      ],
    },
    {
      title: t("hkjccare"),
      url: [
        "https://apps.apple.com/us/app/%E7%85%A7%E9%A1%A7%E9%81%94%E4%BA%BA2-0/id1622310761",
        "https://play.google.com/store/apps/details?id=com.appicidea.jcabcmobileapp",
      ],
      description: t("hkjccare_description"),
      responsibility: t("hkjccare_responsibility"),
      result: t("hkjccare_result"),
      environemnt: [
        "react",
        "react native",
        "JavaScript",
        "TypeScript",
        "ant design",
        "HTML5",
        "CSS3",
        "Java",
        "spring boot",
        "mybatis",
        "macOS",
        "git",
        "gitlab",
      ],
      image: [
        "/pics/appicidea/hkjc/1.jpg",
        "/pics/appicidea/hkjc/2.jpg",
        "/pics/appicidea/hkjc/3.jpg",
        "/pics/appicidea/hkjc/4.jpg",
        "/pics/appicidea/hkjc/5.jpg",
      ],
    },
    {
      title: t("discordbot"),
      url: [
        "https://github.com/shino369/Stable-Diffusion-Naifu-Local-Discord-Bot",
      ],
      description: t("discordbot_description"),
      responsibility: "",
      result: "",
      environemnt: [
        "node.js",
        "JavaScript",
        "TypeScript",
        "discord api",
        "git",
        "github",
      ],
      image: [
        "/pics/github/bot/1.jpg",
        "/pics/github/bot/2.jpg",
        "/pics/github/bot/3.jpg",
      ],
    },
    {
      title: t("telegrambot"),
      url: ["https://github.com/shino369/telegram-bot-typescript-template"],
      description: t("telegrambot_description"),
      responsibility: "",
      result: "",
      environemnt: [
        "node.js",
        "JavaScript",
        "TypeScript",
        "discord api",
        "git",
        "github",
      ],
      image: [],
    },
  ];

  return (
    <main className="flex p-8 sm:p-20 md:p-24 max-height-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 opacity-20 filter brightness-50 -z-10">
        <Image
          className="absolute h-full w-full top-0 left-0 object-cover object-center "
          src="/workbg.jpg"
          alt="code background"
          width={1280}
          height={720}
          priority
        />
      </div>
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

        {/* grid grid-flow-col */}
        <div className="flex justify-center flex-1 overflow-auto">
          <div className=" min-w-8 text-2xl mr-2 break-all w-8 md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <h1>{t("works")}</h1>
          </div>
          <div className="overflow-auto scrollbar-hide w-auto max-w-5xl">
            <Suspense fallback={<></>}>
              <Works works={works} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
