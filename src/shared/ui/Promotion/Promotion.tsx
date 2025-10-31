import React from 'react';
import {Text} from "../Text";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.scss";

export const Promotion = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img
                        className={styles.image}
                        src='/images/promotion/Promotion.svg'
                        alt='promo'
                    />
                    <div className={styles.about}>
                        <Text as="h1" className={styles.title}>
                            {t('Promoting small, medium and large businesses')}
                        </Text>
                        <Text as="h4" className={styles.description}>
                            {t('Promotion description')}
                        </Text>
                        <img
                            className={styles.icon}
                            src='/icons/devices-icon.svg'
                            alt='devices'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};