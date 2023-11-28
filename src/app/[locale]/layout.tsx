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
import { PageTransitionWrapper } from "@/components/FramerTransitionWrapper";
import ContextProvider from "@/components/ContextStore";
import AppProvider from "@/redux/AppProvider";
import clsx from "clsx";
import Disclaimer from "@/components/Disclaimer";

export function generateStaticParams() {
  return i18nLocale.locales.map((locale) => ({ locale }));
}
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "nextjs, nextjs 14, react, framer motion, portfolio, shino369, anthony wong",
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
      <body className={clsx(inter.className, "scrollbar-hide")}>
        <AppProvider>
          <ContextProvider>
            <header>
              <Navbar paths={concatedPAths} locale={locale} />
            </header>
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <ParticlesBG />
            <Disclaimer />
          </ContextProvider>
        </AppProvider>
      </body>
    </html>
  );
}
