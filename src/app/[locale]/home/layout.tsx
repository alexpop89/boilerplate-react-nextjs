import Page from "@containers/page";
import {I18nProviderClient} from "locales/client";
import {getScopedI18n, getStaticParams} from "locales/server";
import {Metadata} from "next";
import {setStaticParamsLocale} from "next-international/server";
import React from "react";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function HomeLayout({children}: { children: React.ReactNode }) {
    setStaticParamsLocale('en');

    const t = await getScopedI18n('home')
    return (
        <I18nProviderClient>
            <Page auth={true} name={'home'} title={t('title')}>
                {children}
            </Page>
        </I18nProviderClient>
    )
}