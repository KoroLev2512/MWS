import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Navigation} from "@/shared/ui/Navigation";
import {LanguageToggle} from "@/shared/ui/LanguageToggle";


import styles from "./styles.module.scss";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <Link href="/" onClick={scrollToTop}>
                        <Image
                            src='/icons/logo_full.svg'
                            alt="logo"
                            width={150}
                            height={50}
                        />
                    </Link>
                </div>
                <Navigation/>
                <LanguageToggle/>
            </div>
        </div>
    );
};
