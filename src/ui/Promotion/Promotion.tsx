import React from 'react';
import {Text} from "@/ui/Text";

import styles from "./styles.module.scss";

export const Promotion = () => {
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
                            Продвигаем малый, средний и крупный бизнес
                        </Text>
                        <Text as="h4" className={styles.description}>
                            Наша веб студия специализируется на продвижении бизнеса любого размера. Мы создаем
                            индивидуальные стратегии для малых, средних и крупных компаний.
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