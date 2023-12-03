import clsx from "clsx";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootPage() {
  // not usage, just to show metadata at root level and redirect to localized page.

  return (
    <html lang={"ja"}>
      <body className={clsx(inter.className, "scrollbar-hide")}>
        empty page
      </body>
      {redirect(`/ja`)}
    </html>
  );
}
