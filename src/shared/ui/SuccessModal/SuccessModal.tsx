"use client";

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../Text';

import styles from './SuccessModal.module.scss';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            // Автоматическое закрытие через 5 секунд
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                
                <div className={styles.iconContainer}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="#0088FF" fillOpacity="0.1"/>
                        <path d="M20 32L28 40L44 24" stroke="#0088FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <Text as="h2" className={styles.title}>
                    {t('Success Title')}
                </Text>

                <Text as="p" className={styles.message}>
                    {t('Success Message')}
                </Text>

                <Text as="p" className={styles.submessage}>
                    {t('Stay Connected')}
                </Text>
            </div>
        </div>
    );
};