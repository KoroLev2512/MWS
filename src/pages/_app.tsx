import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import '@/app/styles/globals.scss'
import i18n from '@/shared/config/i18n/i18n'

function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        // Sync language from localStorage to i18n and cookies on client-side
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ru')) {
                // Only change if different from current language
                if (i18n.language !== storedLanguage) {
                    i18n.changeLanguage(storedLanguage);
                }
                // Ensure cookie is set for SSR compatibility
                if (!document.cookie.includes('language=')) {
                    document.cookie = `language=${storedLanguage}; path=/; max-age=${365 * 24 * 60 * 60}`;
                }
            }
        }
    }, []);
    
    return <Component {...pageProps} />
}

// Get initial props to read language preference from cookies on server-side
App.getInitialProps = async (appContext) => {
    let initialLanguage = 'en';
    
    // Server-side: read from request headers
    if (appContext.ctx.req) {
        const cookies = appContext.ctx.req.headers.cookie || '';
        const languageMatch = cookies.match(/language=([^;]+)/);
        if (languageMatch && (languageMatch[1] === 'en' || languageMatch[1] === 'ru')) {
            initialLanguage = languageMatch[1];
        }
    } 
    // Client-side: read from document.cookie or localStorage
    else if (typeof window !== 'undefined') {
        const cookies = document.cookie;
        const languageMatch = cookies.match(/language=([^;]+)/);
        if (languageMatch && (languageMatch[1] === 'en' || languageMatch[1] === 'ru')) {
            initialLanguage = languageMatch[1];
        } else {
            // Fallback to localStorage if cookie not found
            try {
                const storedLanguage = localStorage.getItem('language');
                if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ru')) {
                    initialLanguage = storedLanguage;
                    // Set cookie from localStorage for future SSR
                    document.cookie = `language=${storedLanguage}; path=/; max-age=${365 * 24 * 60 * 60}`;
                }
            } catch (e) {
                // localStorage might not be available in some contexts
            }
        }
    }
    
    // Initialize i18n with the detected language before rendering
    if (i18n.language !== initialLanguage) {
        await i18n.changeLanguage(initialLanguage);
    }
    
    return {
        pageProps: {}
    };
};

export default App;
