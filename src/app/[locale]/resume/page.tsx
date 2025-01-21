import BgImage from "@/components/BgImage";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import ResumeCard from "@/components/ResumeCard";
import { RESUME } from "@/constants/common";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<LocaleParam>;
}) {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("resume"),
    description: t("resume"),
  };
}

export default function Page() {
  const t = useTranslations("page");

  return (
    <main className="flex py-8 px-4 sm:p-20 md:p-24 max-height-dvh relative">
      <BgImage
        src="/resumebg.jpg"
        alt="code background"
        width={1280}
        height={720}
        priority
      />
      <section className="flex flex-col flex-1">
        <div className="flex justify-center flex-1 overflow-auto">
          <div className=" min-w-8 text-2xl mr-2 break-all w-8 md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <h1>{t("_resume")}</h1>
          </div>
          <div className="overflow-auto scrollbar-hide w-auto max-w-5xl">
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
