"use client";

import { usePathname } from "next/navigation";
import { Locale } from "@/middleware";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { i18nLocale } from "@/i18n/routing";

export default function LocaleSwitcher({ toggle }: { toggle?: () => void }) {
  const router = useRouter();
  const t = useTranslations("page");
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const beforeRedirect = (locale: Locale) => {
    toggle && toggle();
    setTimeout(() => {
      router.push(redirectedPathName(locale));
    }, 400);
  };

  return (
    <div>
      <ul className="flex">
        {i18nLocale.locales.map((locale, i) => {
          return (
            <li
              key={locale}
              className="px-2 uppercase cursor-pointer"
              onClick={() => {
                beforeRedirect(locale);
              }}
            >
              {t(locale)} {i === i18nLocale.locales.length - 1 ? "" : " | "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
