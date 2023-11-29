"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PropsWithChildren, useEffect, useState } from "react";
import DraggableDiv from "./Draggable";
import Badge from "./Badge";
import { ListItem, ListWrapper } from "./ListMotion";
import { useSearchParams } from "next/navigation";

const Tr = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return <tr className={clsx(className)}>{children}</tr>;
};

const Th = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return <th className={clsx(className, "text-left")}>{children}</th>;
};

const Td = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <td className={clsx(className)}>
      <div className="py-2 pl-2">{children}</div>
    </td>
  );
};

type WorkProps = {
  title: string;
  description: string;
  responsibility: string;
  result: string;
  environemnt: string[];
  image: string[];
};

export default function Works({ works }: { works: WorkProps[] }) {
  const t = useTranslations("page");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [filteredList, setFiltedList] = useState<WorkProps[]>([]);

  useEffect(() => {
    if (search) {
      const contain = works.filter(
        (w) =>
          w.title.toLocaleUpperCase().includes(search.toLocaleUpperCase()) ||
          w.description
            .toLocaleUpperCase()
            .includes(search.toLocaleUpperCase()) ||
          w.responsibility
            .toLocaleUpperCase()
            .includes(search.toLocaleUpperCase()) ||
          w.result.toLocaleUpperCase().includes(search.toLocaleUpperCase()) ||
          w.environemnt
            .join("")
            .toLocaleUpperCase()
            .includes(search.toLocaleUpperCase())
      );

      setFiltedList(contain);
    } else {
      setFiltedList(works);
    }
  }, [search, works]);

  return (
    <ListWrapper>
      {filteredList.map(
        ({
          title,
          description,
          responsibility,
          result,
          environemnt,
          image,
        }) => (
          <ListItem key={title}>
            <div className="flex items-center justify-center py-2 pl-2 border-dashed border-b-2 border-b-black dark:border-b-white">
              <div className="w-full">
                <div className="flex justify-center">
                  {image.length > 1 && (
                    <div className="flex items-center text-2xl px-2">{"<"}</div>
                  )}
                  <DraggableDiv className="flex max-w-full">
                    {image.map((m) => (
                      <Image
                        className="mr-3 max-h-[300px] w-auto"
                        key={m}
                        alt={title}
                        src={m}
                        width={800}
                        height={800}
                      />
                    ))}
                  </DraggableDiv>
                  {image.length > 1 && (
                    <div className="flex items-center text-2xl px-2">{">"}</div>
                  )}
                </div>
                <div className="flex my-2 max-w-full text-slate-300 flex-wrap">
                  {environemnt.map((en, i) => (
                    <Badge
                      className={i % 2 === 0 ? "bg-sky-700" : "bg-gray-700"}
                      key={en}
                    >
                      {en}
                    </Badge>
                  ))}
                </div>

                <div className="my-2">
                  <strong>{title}</strong>
                </div>
                <div></div>
                <table className="table whitespace-pre-wrap">
                  <tbody>
                    <Tr>
                      <Th>{t("description")}</Th>
                      <Td>{description}</Td>
                    </Tr>
                    <Tr>
                      <Th>{t("responsibility")}</Th>
                      <Td>{responsibility}</Td>
                    </Tr>
                    <Tr>
                      <Th>{t("result")}</Th>
                      <Td>{result}</Td>
                    </Tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ListItem>
        )
      )}
    </ListWrapper>
  );
}
