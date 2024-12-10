import React from "react";
import { Text } from "../Text";

import styles from "./styles.module.scss";
import {useTranslation} from "react-i18next";

export const Navigation = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.section}>
            <Text as="h4" className={styles.text}>{t('Services')}</Text>
            <Text as="h4" className={styles.text}>{t('Products')}</Text>
            <Text as="h4" className={styles.text}>{t('Courses')}</Text>
            <Text as="h4" className={styles.text}>{t('Blog')}</Text>
            <Text as="h4" className={styles.text}>{t('Courses')}</Text>
        </div>
    )
}