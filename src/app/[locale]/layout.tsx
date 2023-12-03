// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
// import { getRootPaths } from "@/helper/utils";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { LocaleParam } from "@/types";

// global style
import "@/styles/globals.css";
import ParticlesBG from "@/components/ParticlesBG";
import { i18nLocale } from "@/middleware";
import { PageTransitionWrapper } from "@/components/FramerTransitionWrapper";
import AppProvider from "@/redux/AppProvider";
import clsx from "clsx";
import Disclaimer from "@/components/Disclaimer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export function generateStaticParams() {
  return i18nLocale.locales.map((locale) => ({ locale }));
}
const inter = Inter({ subsets: ["latin"], display: "swap" });

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const t = await getTranslations({ locale, namespace: "meta" });
  // generate metadata
  // consider all page use the same metadata, unless contain blog post
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL!),
    openGraph: {
      title: t("title"),
      description: t("description"),
      // url,
      siteName: t("title"),
      type: "website",
      image: process.env.NEXT_PUBLIC_BASEURL!
    },
    twitter: {
      card: "summary_large_image",
      site: "@shino_aw39",
      title: t("title"),
      description: t("description"),
      image: process.env.NEXT_PUBLIC_BASEURL!
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
  // prevent to use server action in static site, like deploying in github page
  // const allPaths = getRootPaths();
  // const concatedPAths = [
  //   {
  //     name: "home",
  //     icon: "home",
  //     path: "/",
  //   },
  //   ...allPaths,
  // ];

  // console.log(concatedPAths);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, "scrollbar-hide")}>
        <AppProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <header>
              <Navbar
                paths={[
                  { name: "home", icon: "home", path: `/${locale}` },
                  { name: "profile", icon: "profile", path: `/${locale}/profile` },
                  { name: "resume", icon: "resume", path:`/${locale}/resume` },
                  { name: "work", icon: "work", path: `/${locale}/work` },
                ]}
                locale={locale}
              />
            </header>
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <ParticlesBG />
            <Disclaimer />
          </NextIntlClientProvider>
        </AppProvider>
      </body>
    </html>
  );
}
