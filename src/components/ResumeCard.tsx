"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Badge from "./Badge";
import CodeBlock from "./CodeBlock";

type ResumeCardProps = {
  title: string;
  role?: string;
  company_name?: string;
  url?: string;
  employment_type?: string;
  employment_period?: string;
  environment?: string[];
  image?: string;
  company_description?: string;
};

const Th = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={clsx(
      "min-w-24 text-[lightseagreen] pr-2 whitespace-nowrap md:pr-12 text-start capitalize",
      className
    )}
  >
    {children}
  </th>
);

const Td = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <td className={className}>{children}</td>;

export const ResumeCard = ({ props }: { props: ResumeCardProps }) => {
  const t = useTranslations("page");

  return (
    <CodeBlock title={t(props.title)} white={props.title === "academic"}>
      <div className="flex-1 p-2">
        <table className="md:max-w-[80%] text-sm md:text-base">
          <tbody>
            {props.title === "job" && (
              <>
                <tr>
                  <Th>{t("company_name")}</Th>
                  <Td>{props.company_name}</Td>
                </tr>
                <tr>
                  <Th>{t("role")}</Th>

                  <Td>{t(props.role)}</Td>
                </tr>

                <tr>
                  <Th>URL</Th>
                  <Td className="hover:bg-slate-500 text-[cadetblue]">
                    <a href={props.url} className="break-all">
                      {props.url}
                    </a>
                  </Td>
                </tr>
                <tr>
                  <Th>{t("employment_type")}</Th>
                  <Td>{t(props.employment_type)}</Td>
                </tr>
                <tr>
                  <Th>{t("employment_period")}</Th>
                  <Td>{props.employment_period}</Td>
                </tr>
                {/* <tr>
                  <Th>{t("environment")}</Th>
                  <Td>
                    <div className="flex flex-wrap text-slate-100">
                      {props.environment?.map((t, i) => (
                        <Badge
                          key={t}
                          className={
                            i % 2 === 0 ? "bg-orange-400" : "bg-red-400"
                          }
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Td>
                </tr> */}
              </>
            )}
          </tbody>
        </table>
        {props.title === "job" && (
          <div className="border-t-white border-t-[1px] mt-2 pt-2">
            <div className="text-slate-200 text-sm whitespace-pre-line leading-8">
              {props.image && (
                <div className="flex justify-center character-shadow">
                  <img
                    className=" my-1 p-2"
                    alt={t("company_name")}
                    height={96}
                    width={"auto"}
                    src={props.image}
                  />
                </div>
              )}
              {t(props.company_description)}
            </div>
          </div>
        )}
      </div>
    </CodeBlock>
  );
};

export const Academic = () => {
  const t = useTranslations("page");
  return (
    <div className=" p-4">
      <table className="md:max-w-[90%] text-sm md:text-base">
        <tbody>
          <tr>
            <Th className="text-[#475cbb]">{t("university")}</Th>
            <Td>{t("cityu")}</Td>
          </tr>
          <tr>
            <Th className="text-[#475cbb]">{t("degree")}</Th>
            <Td>{t("information_engineering")}</Td>
          </tr>
          <tr>
            <Th className="text-[#475cbb]">{t("grad_year")}</Th>
            <Td>2021-2</Td>
          </tr>
        </tbody>
      </table>
      <div className="border-t-black border-t-[1px] mt-2 pt-2">
        <a href="https://www.cityu.edu.hk/" className="break-all">
          <img
            className="white-shadow p-2 my-1"
            alt="Cityu"
            height={96}
            width={"auto"}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/CityU_logo.svg/1200px-CityU_logo.svg.png"
          />
        </a>
        <div className="text-slate-200 text-sm whitespace-pre-line leading-8">
          {t("uni_description")}
        </div>
      </div>
    </div>
  );
};
