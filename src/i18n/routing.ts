import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const i18nLocale = {
    locales: ["en", "ja"],
    defaultLocale: "ja",
    localeDetection: true,
  } as const;

export const routing = defineRouting(i18nLocale);
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);