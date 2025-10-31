import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translations directly to avoid hydration issues
import enTranslations from '../../../../public/locales/en/translation.json';
import ruTranslations from '../../../../public/locales/ru/translation.json';

if (!i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({
            lng: 'en',
            fallbackLng: 'en',
            supportedLngs: ['en', 'ru'],
            debug: false,
            interpolation: {
                escapeValue: false,
            },
            resources: {
                en: {
                    translation: enTranslations
                },
                ru: {
                    translation: ruTranslations
                }
            },
            react: {
                useSuspense: false,
            }
        });
}

export default i18n;