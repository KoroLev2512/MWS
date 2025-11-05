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
            <Link href="#features" onClick={(e) => handleScroll(e, 'features')}>
                <Text as="h4" className={styles.text}>{t('Advantages')}</Text>
            </Link>
            <Link href="#products" onClick={(e) => handleScroll(e, 'products')}>
                <Text as="h4" className={styles.text}>{t('Products')}</Text>
            </Link>
            <Link href="#about" onClick={(e) => handleScroll(e, 'about')}>
                <Text as="h4" className={styles.text}>{t('About Us')}</Text>
            </Link>
            <Link href="#support" onClick={(e) => handleScroll(e, 'support')}>
                <Text as="h4" className={styles.text}>{t('More')}</Text>
            </Link>
        </div>
    )
}