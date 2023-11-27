import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { getRootPaths } from "@/helper/utils";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { LocaleParam } from "@/types";

// global style
import "@/styles/globals.css";
import ParticlesBG from "@/components/ParticlesBG";
import { i18nLocale } from "@/middleware";
import FramerTransitionWrapper from "@/components/FramerTransitionWrapper";

export function generateStaticParams() {
  return i18nLocale.locales.map((locale) => ({ locale }));
}
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & LocaleParam) {
  // Validate that the incoming `locale` parameter is valid
  if (!i18nLocale.locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  const allPaths = getRootPaths();
  const concatedPAths = [
    {
      name: "home",
      icon: "home",
      path: "/",
    },
    ...allPaths,
  ];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar paths={concatedPAths} locale={locale} />
        <FramerTransitionWrapper>{children}</FramerTransitionWrapper>
        <ParticlesBG />
      </body>
    </html>
  );
}
