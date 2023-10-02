'use client'

import Page from "@containers/page";

import {setStaticParamsLocale} from "next-international/server";
import {useScopedI18n} from "locales/client";
import {Fragment} from "react";

export default function Index() {
    const t = useScopedI18n('common')
    const contactT = useScopedI18n('contact')
    return (
        <Fragment>
            <section id="hero">
                <h2>{t('appTitle')}</h2>
                <p>{t('loremIpsum')}</p>
            </section>

            <section id="features">
                <h2>{t('features')}</h2>
                <p>{t('loremIpsum')}</p>
            </section>

            <section id="about">
                <h2>{t('aboutUs')}</h2>
                <p>{t('loremIpsum')}</p>
            </section>

            <section id="contact">
                <h2>{contactT('contactUs')}</h2>
                <p dangerouslySetInnerHTML={{__html: contactT('contactUsWithEmail', {email: 'info@example.com'})}}></p>
            </section>
        </Fragment>
    )
}
