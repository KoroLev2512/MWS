import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translations directly to avoid hydration issues
import enTranslations from '../../../../public/locales/en/translation.json';
import ruTranslations from '../../../../public/locales/ru/translation.json';

// Get initial language from localStorage or cookies
const getInitialLanguage = (): string => {
    if (typeof window !== 'undefined') {
        // Try localStorage first
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ru')) {
            return storedLanguage;
        }
        
        // Try cookies as fallback
        const cookies = document.cookie;
        const languageMatch = cookies.match(/language=([^;]+)/);
        if (languageMatch && (languageMatch[1] === 'en' || languageMatch[1] === 'ru')) {
            return languageMatch[1];
        }
    }
    
    return 'en'; // Default fallback
};

// Only initialize on client side or if not already initialized
if (typeof window !== 'undefined' && !i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({
            lng: getInitialLanguage(),
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