import React from 'react';
import {Text} from "../Text";

import styles from './styles.module.scss';

export const LanguageSelector = () => {
    return (
        <div className={styles.selector}>
            <Text as="h4" className={styles.text}>
                EN
            </Text>
        </div>
    );
};