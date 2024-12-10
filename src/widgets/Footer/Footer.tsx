import React from 'react';
import {Navigation} from "@/shared/ui/Navigation";
import {LanguageToggle} from "@/shared/ui/LanguageToggle";


import styles from "./styles.module.scss";

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <img
                        src='/icons/logo_full.svg'
                        alt="logo"
                    />
                </div>
                <Navigation/>
                <LanguageToggle/>
            </div>
        </div>
    );
};
