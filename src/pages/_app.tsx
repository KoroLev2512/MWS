import type {AppProps} from 'next/app'
import {useEffect, useState} from 'react'
import '@/app/styles/globals.scss'
import i18n from '@/shared/config/i18n/i18n'
import { NavigationBar } from '@/widgets/NavigationBar'
import { CookieConsent } from '@/shared/ui/CookieConsent'

function App({Component, pageProps}: AppProps) {
    const [isLanguageReady, setIsLanguageReady] = useState(false);
    
    useEffect(() => {
        // Sync language from localStorage/cookies to i18n on client-side
        if (typeof window !== 'undefined') {
            // First check localStorage
            let detectedLanguage = localStorage.getItem('language');
            
            // If not in localStorage, check cookies
            if (!detectedLanguage) {
                const cookies = document.cookie;
                const languageMatch = cookies.match(/language=([^;]+)/);
                detectedLanguage = languageMatch?.[1] || 'en';
            }
            
            // Validate language
            const language = (detectedLanguage === 'en' || detectedLanguage === 'ru') ? detectedLanguage : 'en';
            
            // Change language if different
            if (i18n.language !== language) {
                i18n.changeLanguage(language).then(() => {
                    setIsLanguageReady(true);
                });
            } else {
                setIsLanguageReady(true);
            }
            
            // Sync to both localStorage and cookies
            localStorage.setItem('language', language);
            if (!document.cookie.includes(`language=${language}`)) {
                document.cookie = `language=${language}; path=/; max-age=${365 * 24 * 60 * 60}`;
            }
        } else {
            setIsLanguageReady(true);
        }
    }, []);
    
    // Wait for language to be ready before rendering
    if (!isLanguageReady) {
        return null;
    }
    
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
            <CookieConsent />
        </>
    )
}

export default App;
