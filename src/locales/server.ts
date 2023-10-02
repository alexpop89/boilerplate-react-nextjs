import { createI18nServer } from 'next-international/server';
// import en from './translations/en';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer(
    {
        en: () => import('./translations/en'),
        fr: () => import('./translations/de'),
    },
    {
        // Uncomment to use custom segment name
        // segmentName: 'locale',
        // Uncomment to set fallback locale
        // fallbackLocale: en,
    },
);