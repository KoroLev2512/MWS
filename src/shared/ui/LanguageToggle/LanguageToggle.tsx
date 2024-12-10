import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './styles.module.scss';

export const LanguageToggle = () => {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || i18n.language;
        }
        return i18n.language;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    const toggle = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
    };

    return (
        <button onClick={toggle} className={styles.lang}>
            {language.toUpperCase()}
        </button>
    );
};