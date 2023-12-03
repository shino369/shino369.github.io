// Since we have a root `not-found.tsx` page, a layout file
import { getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";

export async function generateMetadata() {
  const t = await getTranslations({ locale: 'ja', namespace: "meta" });
  // next intl do not handle this level, force to use ja locale
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

// is required, even if it's just passing children through.
export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
