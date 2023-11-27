import Badge from "@/components/Badge";
import CodeBlock from "@/components/CodeBlock";
import { ListItem, ListWrapper } from "@/components/ListMotion";
import ResumeCard from "@/components/ResumeCard";
import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-8 sm:p-20 md:p-24">
      <section>
        <p className="text-xs md:text-base mb-4">
          フロントエンド領域では、レスポンシブなWEBアプリケーションを制作することに長けており、React.js、Vue.js、Angular、そしてNext.jsなど、多岐にわたるJavaScriptフレームワークでの開発経験を保有しています。中でもVue3を用いたフロントエンドのリニューアルプロジェクトをリードした経験があります。バックエンドにおいては、Java
          Spring BootおよびCakePHPを使用したRESTful APIの開発経験があります。
        </p>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl mr-2 break-all w-8 md:w-auto">{t("_resume")}</h1>
   
            <ListWrapper>
              <ListItem>
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
                },
                {
                  title: "job",
                  role: "backend_developer",
                  company_name: "Appicidea IT Solutions Limited",
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
                },
              ].map((props) => (
                <ListItem key={props.company_name}>
                  <ResumeCard props={props} />
                </ListItem>
              ))}
            </ListWrapper>
         
        </div>
      </section>
    </main>
  );
}
