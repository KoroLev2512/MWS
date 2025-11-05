import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/shared/lib/store/appStore';
import { MyButton } from '@/shared/ui/Button/MyButton';

import styles from './styles.module.scss';

export const NavigationBar = () => {
    const { t, ready } = useTranslation();
    const menuPageIsOpen = useAppStore(state => state.menuPageIsOpen);
    const toggleMenuPage = useAppStore(state => state.toggleMenuPage);
    const toggleContactModal = useAppStore(state => state.toggleContactModal);
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (menuPageIsOpen) {
            setShouldRender(true);
            setIsClosing(false);
        } else if (shouldRender) {
            setIsClosing(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 300); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [menuPageIsOpen, shouldRender]);

    const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        toggleMenuPage(); // Close menu
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }, [toggleMenuPage]);

    const handleOverlayClick = useCallback(() => {
        toggleMenuPage();
    }, [toggleMenuPage]);

    const handleContactClick = useCallback(() => {
        toggleMenuPage(); // Close mobile menu
        toggleContactModal(true); // Open contact modal
    }, [toggleMenuPage, toggleContactModal]);

    if (!shouldRender || !ready) return null;

    return (
        <div className={`${styles.overlay} ${isClosing ? styles.closing : ''}`} onClick={handleOverlayClick}>
            <div className={`${styles.menu} ${isClosing ? styles.menuClosing : ''}`} onClick={(e) => e.stopPropagation()}>
                <nav className={styles.navigation}>
                    <Link href="#features" onClick={(e) => handleScroll(e, 'features')}>
                        <Text as="h3" className={styles.navItem}>{t('Advantages')}</Text>
                    </Link>
                    <Link href="#products" onClick={(e) => handleScroll(e, 'products')}>
                        <Text as="h3" className={styles.navItem}>{t('Products')}</Text>
                    </Link>
                    <Link href="#about" onClick={(e) => handleScroll(e, 'about')}>
                        <Text as="h3" className={styles.navItem}>{t('About Us')}</Text>
                    </Link>
                    <Link href="#support" onClick={(e) => handleScroll(e, 'support')}>
                        <Text as="h3" className={styles.navItem}>{t('More')}</Text>
                    </Link>
                </nav>
                <div className={styles.buttonContainer}>
                    <MyButton onClick={handleContactClick}>
                        {t('Contact')}
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

