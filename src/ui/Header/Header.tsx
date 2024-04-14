import React from 'react';
import { MyButton } from "../Button/MyButton";
import { Navigation } from "../Navigation";

import styles from './styles.module.scss';


export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
            <div className={styles.button}>
                <MyButton>
                     Связаться
                </MyButton>
                <MyButton>
                    Поддержка
                </MyButton>
            </div>
        </div>
    );
};
