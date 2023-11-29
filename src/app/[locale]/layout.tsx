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
import { NextIntlClientProvider, useMessages } from "next-intl";

export function generateStaticParams() {
  return i18nLocale.locales.map((locale) => ({ locale }));
}
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "developer",
      "shino369",
      "Anthony Wong",
    ],
    creator: "Antonhy Wong",
    generator: "Next.js 14",
    authors: { name: "shino369", url: "https://github.com/shino369" },
    metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      // url,
      siteName: t("title"),
      type: "website",
      image: "/og-imag.jpg",
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & LocaleParam) {
  // Validate that the incoming `locale` parameter is valid
  if (!i18nLocale.locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);
  const messages = useMessages();
  const allPaths = getRootPaths();
  const concatedPAths = [
    {
      name: "home",
      icon: "home",
      path: "/",
    },
    ...allPaths,
  ];

  console.log(allPaths);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, "scrollbar-hide")}>
        <AppProvider>
          <ContextProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <header>
                <Navbar paths={concatedPAths} locale={locale} />
              </header>
              <PageTransitionWrapper>{children}</PageTransitionWrapper>
              <ParticlesBG />
              <Disclaimer />
            </NextIntlClientProvider>
          </ContextProvider>
        </AppProvider>
      </body>
    </html>
  );
}
