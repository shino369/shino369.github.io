import { Locale } from "@/middleware"

export interface NavPath {
    name: string
    icon: string
    path: string
}

export type LocaleParam = {
    params: { locale: Locale }
}

export type ResumeCardProps = {
    title: string
    role?: string
    company_name?: string
    url?: string
    employment_type?: string
    employment_period?: string
    environment?: string[]
}