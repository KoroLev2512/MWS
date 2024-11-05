import React from 'react';
import { MyButton } from "@/shared/ui/Button/MyButton";
import { Navigation } from "@/shared/ui/Navigation";
import { LanguageSelector } from "@/shared/ui/LanguageSelector";
import Burger from "@/shared/ui/Burger/Burger";
import {useAppStore} from "@/shared/lib/store/appStore";

import styles from './styles.module.scss';
import classNames from 'classnames';


const NavigationBarToggle = (): JSX.Element => {
    const [toggleMenuPage, menuPageIsOpen] = useAppStore(state => [state.toggleMenuPage, state.menuPageIsOpen]);

    const handleClick = () => {
        toggleMenuPage();
    };

    return (
        <div>
            <Burger menuPageIsOpen={menuPageIsOpen} />
        </div>
    );
};

export const Header = () => {
    return (
        <>
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
                    <MyButton>
                        Поддержка
                    </MyButton>
                </div>
                <LanguageSelector/>
            </div>
            {/*<div>*/}
            {/*   <NavigationBarToggle/>*/}
            {/*</div>*/}
        </>
    );
};
