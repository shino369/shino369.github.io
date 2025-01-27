// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
// import { getRootPaths } from "@/helper/utils";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { LocaleParam } from "@/types";

// global style
import "@/styles/globals.css";
import ParticlesBG from "@/components/ParticlesBG";
import { PageTransitionWrapper } from "@/components/FramerTransitionWrapper";
import AppProvider from "@/redux/AppProvider";
import clsx from "clsx";
import Disclaimer from "@/components/Disclaimer";
import { NextIntlClientProvider } from "next-intl";
import { i18nLocale, routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
const inter = Inter({ subsets: ["latin"], display: "swap" });

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParam>;
}) {
  const locale = (await params).locale;
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
    verification: {
      google: "63nDQ2uCV1_BGmV0KxU6stNJhWMZD0OCZEpGrbAMkWQ",
    },
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
      image: process.env.NEXT_PUBLIC_BASEURL! + "/opengraph-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      site: "@shino_aw39",
      title: t("title"),
      description: t("description"),
      image: process.env.NEXT_PUBLIC_BASEURL! + "/opengraph-image.jpg",
    },
    icons: {
      icon: ["/favicon.ico"],
      apple: ["/favicon.ico"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<LocaleParam>;
}>) {
  const locale = (await params).locale;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  // prevent to use server action in static site? like deploying in github page
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
    <html lang={locale} className="dark">
      <body
        className={clsx(inter.className, "scrollbar-hide", "md:max-w-[1280px]")}
      >
        {/* redux */}
        <AppProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <header>
              <Navbar
                paths={[
                  { name: "home", icon: "home", path: `/${locale}` },
                  {
                    name: "profile",
                    icon: "profile",
                    path: `/${locale}/profile`,
                  },
                  { name: "resume", icon: "resume", path: `/${locale}/resume` },
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
