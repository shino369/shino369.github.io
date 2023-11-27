import { ResumeCardProps } from "@/types";
import Badge from "./Badge";
import CodeBlock from "./CodeBlock";
import { useTranslations } from "next-intl";
import clsx from "clsx";

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
    <CodeBlock title={t(props.title) + ".txt"}>
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
                  <a href="https://www.ee.cityu.edu.hk/current_students/undergraduate/major/admission_beng-infe_aim" className="break-all">
                    https://www.ee.cityu.edu.hk/current_students/undergraduate/major/admission_beng-infe_aim
                  </a>
                </Td>
              </tr>
            </>
          )}

          {props.title === "job" && (
            <>
              <tr>
                <Th>{t("role")}</Th>

                <Td>{t(props.role)}</Td>
              </tr>
              <tr>
                <Th>{t("company_name")}</Th>
                <Td>{props.company_name}</Td>
              </tr>
              <tr>
                <Th>URL</Th>
                <Td className="hover:bg-slate-500 text-[cadetblue]">
                  <a href={props.url} className="break-all">{props.url}</a>
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
                  <div className="flex flex-wrap">
                    {props.environment?.map((t, i) => (
                      <Badge
                        key={t}
                        className={i % 2 === 0 ? "bg-orange-400" : "bg-red-400"}
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
    </CodeBlock>
  );
};

export default ResumeCard;
