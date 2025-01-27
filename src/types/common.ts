import { Locale } from "@/middleware";
import { getTranslations } from "next-intl/server";

export interface NavPath {
  name: string;
  icon: string;
  path: string;
}

export type LocaleParam = {
  locale: Locale;
};

export type TranslationModel = {
  shouldTranslate: boolean;
  key: string;
};

export const isTranslationModel = (obj: any): obj is TranslationModel => {
  return obj.shouldTranslate && obj.key;
};

export type WorkProps = {
  title: string;
  description: string;
  environemnt: string[];
  image?: string[];
  url?: string[];
};

export const isWorkProps = (obj: any): obj is WorkProps => {
  return obj.title && obj.description && obj.environemnt;
};

export type i18nT = ReturnType<typeof getTranslations> extends Promise<infer T>
  ? T
  : never;
