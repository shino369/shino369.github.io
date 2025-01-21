import createMiddleware from "next-intl/middleware";
import { i18nLocale, routing } from "./i18n/routing";

export type Locale = (typeof i18nLocale)["locales"][number];

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ja|en)/:path*"],
};

export default createMiddleware(routing);
