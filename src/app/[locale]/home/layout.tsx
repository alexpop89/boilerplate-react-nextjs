import {Metadata} from "next";
import {getScopedI18n, getStaticParams} from "locales/server";
import {I18nProviderClient, useScopedI18n} from "locales/client";
import Page from "@containers/page";
import {setStaticParamsLocale} from "next-international/server";

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