import React from "react";
import Link from "next/link";
import { Text } from "../Text";

import styles from "./styles.module.scss";
import {useTranslation} from "react-i18next";

export const Navigation = () => {
    const {t} = useTranslation();
    
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <div className={styles.section}>
            <Link href="#services" onClick={(e) => handleScroll(e, 'services')}>
                <Text as="h4" className={styles.text}>{t('Services')}</Text>
            </Link>
            <Link href="#products" onClick={(e) => handleScroll(e, 'products')}>
                <Text as="h4" className={styles.text}>{t('Products')}</Text>
            </Link>
            <Link href="#courses" onClick={(e) => handleScroll(e, 'courses')}>
                <Text as="h4" className={styles.text}>{t('Courses')}</Text>
            </Link>
            <Link href="#blog" onClick={(e) => handleScroll(e, 'blog')}>
                <Text as="h4" className={styles.text}>{t('Blog')}</Text>
            </Link>
            <Link href="#support" onClick={(e) => handleScroll(e, 'support')}>
                <Text as="h4" className={styles.text}>{t('Support')}</Text>
            </Link>
        </div>
    )
}