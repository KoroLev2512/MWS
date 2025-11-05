import React, { useState } from 'react';
import Image from 'next/image';
import {MyButton} from "@/shared/ui/Button/MyButton";
import {Navigation} from "@/shared/ui/Navigation";
import Burger from "@/shared/ui/Burger/Burger";
import {useAppStore} from "@/shared/lib/store/appStore";
import Link from "next/link";
import {LanguageToggle} from "@/shared/ui/LanguageToggle";
import {ContactModal} from "@/shared/ui/ContactModal";
import {SuccessModal} from "@/shared/ui/SuccessModal";
import {useTranslation} from "react-i18next";

import styles from './styles.module.scss';

const NavigationBarToggle = React.memo((): React.ReactElement => {
    const toggleMenuPage = useAppStore(state => state.toggleMenuPage);
    const menuPageIsOpen = useAppStore(state => state.menuPageIsOpen);

    const handleToggle = () => {
        toggleMenuPage();
    };

    return (
        <div>
            <Burger menuPageIsOpen={menuPageIsOpen} onClick={handleToggle}/>
        </div>
    );
});

NavigationBarToggle.displayName = 'NavigationBarToggle';

export const Header = () => {
    const {t} = useTranslation();
    const contactModalIsOpen = useAppStore(state => state.contactModalIsOpen);
    const toggleContactModal = useAppStore(state => state.toggleContactModal);
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

    const handleContactClick = () => {
        toggleContactModal(true);
    };

    const handleCloseModal = () => {
        toggleContactModal(false);
    };

    const handleSuccess = () => {
        setSuccessModalIsOpen(true);
    };

    const handleCloseSuccessModal = () => {
        setSuccessModalIsOpen(false);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src='/icons/logo.svg'
                            alt="logo"
                            width={120}
                            height={37}
                            priority
                        />
                    </Link>
                </div>
                <Navigation/>
                <div className={styles.rightSection}>
                    <div className={styles.button}>
                        <MyButton onClick={handleContactClick}>
                            {t('Contact')}
                        </MyButton>
                        {/* <MyButton>
                            {t('More')}
                        </MyButton> */}
                    </div>
                    <LanguageToggle />
                    <NavigationBarToggle/>
                </div>
            </div>
            <ContactModal 
                isOpen={contactModalIsOpen} 
                onClose={handleCloseModal}
                onSuccess={handleSuccess}
            />
            <SuccessModal 
                isOpen={successModalIsOpen} 
                onClose={handleCloseSuccessModal}
            />
        </>
    );
};
