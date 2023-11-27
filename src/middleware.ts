import createMiddleware from "next-intl/middleware";

export const i18nLocale = {
  locales: ["en", "jp"],
  defaultLocale: "jp",
  localeDetection: true
} as const;

export type Locale = (typeof i18nLocale)["locales"][number];

export default createMiddleware(i18nLocale);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(jp|en)/:path*"],
};
