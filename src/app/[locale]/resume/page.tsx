import { ListItem, ListWrapper } from "@/components/ListMotion";
import ResumeCard from "@/components/ResumeCard";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("resume"),
    description: t("resume"),
  };
}

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex p-8 sm:p-20 md:p-24 max-height-dvh">
      <section className="flex flex-col flex-1">
        <p
          className="text-xs md:text-base pb-4"
          id="resume-description"
          title="resume-description"
        >
          {t("resume_description")}
        </p>
        {/* grid grid-flow-col */}
        <div className="flex justify-center flex-1 overflow-auto">
          <div className=" min-w-8 text-2xl mr-2 break-all w-8 md:w-auto border-r-4 pr-2 border-r-black dark:border-r-white self-start">
            <h1>{t("_resume")}</h1>
          </div>
          <div className="overflow-auto scrollbar-hide w-auto">
            <ListWrapper>
              <ListItem scale spring>
                <ResumeCard
                  props={{
                    title: "academic",
                  }}
                />
              </ListItem>

              {[
                {
                  title: "job",
                  role: "programmer",
                  company_name:
                    "Shiji Information Technology (Hong Kong) Limited",
                  image:
                    "https://assets-global.website-files.com/5bbba67586f1ae657749bb91/5bca0d583401003d63b8cd4e_header-logo-new-blue.png",
                  url: "https://www.shijigroup.com/",
                  employment_type: "permanent",
                  employment_period: "2022-8 ～ 2023-8",
                  environment: [
                    "TypeScript",
                    "JavaScript",
                    "React.js",
                    "Vue.js",
                    "jQuery",
                    "CakePHP",
                    "MySQL",
                  ],
                  company_description: `shiji_description`,
                },
                {
                  title: "job",
                  role: "backend_developer",
                  company_name: "Appicidea IT Solutions Limited",
                  image:
                    "https://media.licdn.com/dms/image/C560BAQFlA0KHrp5G6w/company-logo_200_200/0/1669796846916/appicidea_it_solutions_limited_logo?e=1706745600&v=beta&t=Y_jVVQYJUiY191J50YMICRGutEF-BxPk6UxRHvGybNg",
                  url: "https://appicidea.com/",
                  employment_type: "permanent",
                  employment_period: "2021-9 ～ 2022-7",
                  environment: [
                    "TypeScript",
                    "JavaScript",
                    "React.js",
                    "React Native",
                    "Angular",
                    "Java",
                    "Springboot",
                    "PostgreSQL",
                  ],
                  company_description: `appicidea_description`,
                },
              ].map((props) => (
                <ListItem scale spring key={props.company_name}>
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
