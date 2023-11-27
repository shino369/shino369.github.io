import { LocaleParam } from "@/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }: LocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("page");

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-10 sm:p-20 md:p-24">
      {t('_profile')}
    </main>
  );
}
