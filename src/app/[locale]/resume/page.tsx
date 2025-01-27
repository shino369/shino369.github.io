import BgImage from "@/components/BgImage";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import { Academic, ResumeCard } from "@/components/ResumeCard";
import { RESUME } from "@/constants/common";
import { LocaleParam } from "@/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<LocaleParam>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("resume"),
    description: t("resume"),
  };
}

export default async function Page(props: { params: Promise<LocaleParam> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "page" });

  const UpperSection = () => {
    return (
      <>
        <div className="mb-6">
          <h1 className="mb-2 text-2xl">{t("academic")}</h1>
          <div className="bg-zinc-900 rounded-md p-2">
            <Academic />
          </div>
        </div>

        <h1 className="mb-2 text-2xl">{t("language")}</h1>
        <div className="bg-zinc-900 text-slate-200  text-sm whitespace-pre-wrap rounded-md p-6 leading-8">
          {t("languages")}
        </div>
      </>
    );
  };

  return (
    <main className="flex py-8 px-4 sm:py-0  max-height-dvh relative">
      <BgImage
        src="/resumebg.jpg"
        alt="code background"
        width={1280}
        height={720}
        priority
      />
      <section className="flex flex-col flex-1">
        <div className="flex flex-col md:flex-row justify-center flex-1 overflow-auto">
          <div className="hidden md:block mt-12 w-96 min-w-96 max-w-96 text-2xl mr-2 break-all md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <UpperSection />
          </div>
          <div className="py-12 overflow-auto w-auto scrollbar-hide max-w-5xl">
            <div className="md:hidden mb-4 w-auto mt-12 text-2xl break-all self-start">
              <UpperSection />
            </div>
            <ListWrapper
              variant={{
                open: {
                  width: "auto",
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 1.5,
                    delay: 0.5,
                  },
                },
                closed: {
                  width: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              <h1 className="mb-2 text-2xl">{t("_resume")}</h1>
              {RESUME.map((props, i) => (
                <ListItem scale key={i}>
                  <ResumeCard props={props} />
                </ListItem>
              ))}
            </ListWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
