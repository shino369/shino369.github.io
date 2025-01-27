"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PropsWithChildren, useEffect, useState } from "react";
import DraggableDiv from "./Draggable";
import Badge from "./Badge";
import { ListItem, ListWrapper } from "./ListMotion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import WithPlaceholder from "./WithPlaceholder";
import { AnimatePresence, motion } from "motion/react";
import { WorkProps } from "@/types";

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
  return (
    <th className={clsx(className, "text-left capitalize")}>{children}</th>
  );
};

const Td = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <td className={clsx(className)}>
      <div className="py-2 pl-2 leading-8">{children}</div>
    </td>
  );
};

export default function Works({ works }: { works: WorkProps[] }) {
  const t = useTranslations("page");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [filteredList, setFiltedList] = useState<WorkProps[]>(works);
  const [imageClicked, setImageClicked] = useState({
    src: "",
    clicked: false,
  });

  useEffect(() => {
    if (search) {
      const reg = new RegExp(`.+${search}|${search}|${search}}.`, "gi");
      const contain = works.filter(
        (w) =>
          reg.test(w.title) ||
          reg.test(w.description) ||
          reg.test(w.responsibility) ||
          reg.test(w.result) ||
          reg.test(w.environemnt.join(""))
      );

      setFiltedList(contain);
    } else {
      setFiltedList(works);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <ListWrapper
        variant={{
          open: {
            width: "auto",
            transition: {
              staggerChildren: 0.25,
              delayChildren: 1.5,
              delay: 0.5,
              //   type: "spring",
            },
          },
          closed: {
            width: 0,
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
              // type: "spring"
            },
          },
        }}
      >
        {filteredList.map(
          ({
            title,
            description,
            responsibility,
            result,
            environemnt,
            image,
            url,
          }) => (
            <ListItem
              key={title}
              className="text-slate-300 mb-4 md:mb-8 py-2 md:py-4 md:px-2 "
            >
              <div className="flex items-center justify-center py-4 px-2 ">
                <div className="w-full">
                  <div className="flex justify-center relative">
                    <DraggableDiv className="flex max-w-full overflow-auto">
                      {image.map((m) => (
                        <WithPlaceholder
                          className="mr-3 max-h-[300px] h-40 w-auto cursor-pointer"
                          key={m}
                          alt={title}
                          src={m}
                          width={800}
                          height={800}
                          onClick={() => {
                            setImageClicked({
                              src: m,
                              clicked: true,
                            });
                          }}
                        />
                      ))}
                    </DraggableDiv>
                  </div>
                  <div className="flex my-4 max-w-full text-slate-300 flex-wrap">
                    {environemnt.map((en, i) => (
                      <Badge
                        className={clsx(
                          i % 2 === 0 ? "bg-sky-700" : "bg-gray-700",
                          "capitalize"
                        )}
                        key={en}
                      >
                        {en}
                      </Badge>
                    ))}
                  </div>

                  <div className="my-4">
                    <strong>{title}</strong>
                  </div>
                  <div className="my-4">
                    {url &&
                      url.map((u) => (
                        <div key={u}>
                          <Link
                            className="hover:bg-slate-500 break-all text-green-400"
                            href={u}
                          >
                            {u}
                          </Link>
                        </div>
                      ))}
                  </div>
                  <div className="shadow-md rounded-md text-[rgb(68,68,68)] font-sans bg-[#d3d3d3] my-4 p-4">
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
              </div>
            </ListItem>
          )
        )}
      </ListWrapper>
      {/* simple popup */}
      <AnimatePresence mode="wait">
        {imageClicked.clicked && (
          <motion.div
            key={imageClicked.src}
            variants={{
              initial: {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                transition: { duration: 0.4 },
              },
              animate: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition: { duration: 0.4, staggerChildren: 0.1 },
              },
              exit: {
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                transition: { duration: 0.4 },
              },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="fixed h-[100dvh] w-[100vw] top-0 left-0 z-10 flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
          >
            <div>
              <Image
                className="w-auto max-w-[95vw] h-[95dvh] object-contain cursor-pointer"
                alt={imageClicked.src}
                src={imageClicked.src}
                width={1000}
                height={1000}
                onClick={() => {
                  setImageClicked({
                    src: "",
                    clicked: false,
                  });
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
