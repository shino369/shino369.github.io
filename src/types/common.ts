import { Locale } from "@/middleware"

export interface NavPath {
    name: string
    icon: string
    path: string
}

export type LocaleParam = {
    params: { locale: Locale }
}