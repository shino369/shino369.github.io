"use client";

import { usePathname } from "next/navigation";
import { Locale, i18nLocale } from "@/middleware";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher({ toggle }: { toggle: () => void }) {
  const router = useRouter();
  const t = useTranslations('page')
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const beforeRedirect = (locale: Locale) => {
    toggle();
    setTimeout(() => {
      router.push(redirectedPathName(locale));
    }, 400);
  };

  return (
    <div>
      <ul className="flex">
        {i18nLocale.locales.map((locale) => {
          return (
            <li
              key={locale}
              className="px-2 uppercase cursor-pointer"
              onClick={() => {
                beforeRedirect(locale);
              }}
            >
              {t(locale)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
