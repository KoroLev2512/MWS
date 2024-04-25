import React from 'react';
import { MyButton } from "../Button/MyButton";
import { Navigation } from "../Navigation";
import { LanguageSelector } from "@/ui/LanguageSelector";

import styles from './styles.module.scss';


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img
                    src='/icons/logo.svg'
                    alt="logo"
                />
            </div>
            <Navigation/>
            <div className={styles.button}>
                <MyButton>
                     Связаться
                </MyButton>
                <MyButton >
                    Поддержка
                </MyButton>
            </div>
            <LanguageSelector/>
        </div>
    );
};
