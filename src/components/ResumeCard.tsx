import { ResumeCardProps } from "@/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Badge from "./Badge";
import CodeBlock from "./CodeBlock";

const Th = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={clsx(
      "min-w-24 text-[lightseagreen] pr-2 whitespace-nowrap md:px-12",
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

const ResumeCard = ({ props }: { props: ResumeCardProps }) => {
  const t = useTranslations("page");

  return (
    <CodeBlock title={t(props.title) + ".txt"} white={props.title === "academic"}>
      <div className="flex-1">
        <table className="md:max-w-[80%] text-sm md:text-base">
          <tbody>
            {props.title === "academic" && (
              <>
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
                <tr>
                  <Th className="text-[#475cbb]">URL</Th>
                  <Td className="hover:bg-slate-500 text-[cadetblue]">
                    <a
                      href="https://www.ee.cityu.edu.hk/current_students/undergraduate/major/admission_beng-infe_aim"
                      className="break-all"
                    >
                      https://www.ee.cityu.edu.hk/current_students/undergraduate/major/admission_beng-infe_aim
                    </a>
                  </Td>
                </tr>
              </>
            )}

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
                <tr>
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
                </tr>
              </>
            )}
          </tbody>
        </table>
        {props.title === "academic" && (
          <div className="border-t-black border-t-[1px] mt-2 pt-2 px-2">
            <Image
              className="bg-white my-1"
              alt="Cityu"
              height={30}
              width={50}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/CityU_logo.svg/1200px-CityU_logo.svg.png"
            />
            <div className="text-black text-xs whitespace-pre-line">
              {t("uni_description")}
            </div>
          </div>
        )}

        {props.title === "job" && (
      
            <div className="border-t-white border-t-[1px] mt-2 pt-2 px-2">
              <div className="text-gray-300 text-xs whitespace-pre-line">
                {props.image && (
                  <Image
                    className="bg-white my-1"
                    alt={t("company_name")}
                    height={40}
                    width={40}
                    src={props.image}
                  />
                )}
                {t(props.company_description)}
              </div>
            </div>
      
        )}
      </div>
    </CodeBlock>
  );
};

export default ResumeCard;
