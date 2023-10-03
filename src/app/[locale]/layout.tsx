import Page from "@containers/page";
import '@styles/globals.scss'
import {I18nProviderClient} from "locales/client";
import {getStaticParams} from "locales/server";
import en from 'locales/translations/en';

import type {Metadata} from 'next'
import {setStaticParamsLocale} from "next-international/server";
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Boilerplate NextJS Application',
    description: 'Generated by create next app',
}

export function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    setStaticParamsLocale('en');

    return (
        <html lang="en">
        <I18nProviderClient fallbackLocale={en}>
            <body className={inter.className}>
                <Page>
                    {children}
                </Page>
            </body>
        </I18nProviderClient>
        </html>
    )
}
