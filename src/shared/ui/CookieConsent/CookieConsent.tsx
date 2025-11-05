"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../Text';

import styles from './CookieConsent.module.scss';

export const CookieConsent: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.banner}>
                <Text as="p" className={styles.message}>
                    {t('Cookie Consent Message')}
                </Text>
                <div className={styles.buttons}>
                    <button className={styles.acceptButton} onClick={handleAccept}>
                        {t('Accept')}
                    </button>
                    <button className={styles.declineButton} onClick={handleDecline}>
                        {t('Decline')}
                    </button>
                </div>
            </div>
        </div>
    );
};

