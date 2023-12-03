"use client";

import { redirect, usePathname } from "next/navigation";

// Can be imported from a shared config
const defaultLocale = "ja";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname === "/") {
    // Add a locale prefix to show a localized not found page
    redirect(`/${defaultLocale}`);
  } else {
    redirect(`/${defaultLocale}/404`);
  }
}
