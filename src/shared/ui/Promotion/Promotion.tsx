import React from 'react';
import Image from 'next/image';
import {Text} from "../Text";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.scss";

export const Promotion = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Image
                        className={styles.image}
                        src='/images/promotion/Promotion.svg'
                        alt='promo'
                        width={600}
                        height={600}
                    />
                    <div className={styles.about}>
                        <Text as="h1" className={styles.title}>
                            {t('Promoting small, medium and large businesses')}
                        </Text>
                        <Text as="h4" className={styles.description}>
                            {t('Promotion description')}
                        </Text>
                        <Image
                            className={styles.icon}
                            src='/icons/devices-icon.svg'
                            alt='devices'
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};