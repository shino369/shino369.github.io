import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleParam } from "@/types";

export async function generateMetadata(props: {params: Promise<LocaleParam>}) {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "meta" });

  // generate metadata
  // consider all page use the same metadata, unless contain blog post
  return {
    title: t("404"),
    description: t("404"),
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
      image: process.env.NEXT_PUBLIC_BASEURL! + '/opengraph-image.jpg'
    },
    twitter: {
      card: "summary_large_image",
      site: "@shino_aw39",
      title: t("title"),
      description: t("description"),
      image: process.env.NEXT_PUBLIC_BASEURL! + '/opengraph-image.jpg'
    },
  };
}

export const dynamic = "force-static";

export default async function NotFound(props: { params: Promise<LocaleParam> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "page" });

  return (
    <main className="flex flex-col items-center justify-center p-8 sm:p-20 md:p-24 max-height-dvh">
      <h1 className="text-2xl">{t("404")}</h1>
      <Link href="/" className="hover:bg-[rgba(0,0,0,0.5)] px-2">
        {t("back")}
      </Link>
    </main>
  );
}
