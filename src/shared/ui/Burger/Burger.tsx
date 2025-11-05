import React from "react";
import styles from "./styles.module.scss";

interface Props {
    menuPageIsOpen: boolean;
    onClick?: () => void;
}

const Burger: React.FC<Props> = ({ menuPageIsOpen, onClick }) => {
    return (
        <button
            className={styles.burger}
            onClick={onClick}
            aria-label={menuPageIsOpen ? "Закрыть меню" : "Открыть меню"}
        >
            <i className={`${styles.line} ${menuPageIsOpen ? styles.lineTop : ''}`}></i>
            <i className={`${styles.line} ${menuPageIsOpen ? styles.lineMiddle : ''}`}></i>
            <i className={`${styles.line} ${menuPageIsOpen ? styles.lineBottom : ''}`}></i>
        </button>
    );
};

export default Burger;