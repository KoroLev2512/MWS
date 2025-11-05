"use client";

import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import styles from './styles.module.scss';

export const LanguageToggle: React.FC = () => {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            const currentLang = storedLanguage || i18n.language || 'en';
            return currentLang.toUpperCase();
        }
        return (i18n.language || 'en').toUpperCase();
    });

    // Listen for language changes
    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            if (lng) {
                setLanguage(lng.toUpperCase());
            }
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const toggle = () => {
        const currentLang = i18n.language || 'en';
        const newLanguage = currentLang === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLanguage);
        // Save to both localStorage and cookies for SSR compatibility
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', newLanguage);
            // Set cookie that expires in 1 year
            document.cookie = `language=${newLanguage}; path=/; max-age=${365 * 24 * 60 * 60}`;
        }
    };

    return (
        <button onClick={toggle} className={styles.lang}>
            {language}
        </button>
    );
};