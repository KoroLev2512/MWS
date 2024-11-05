import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
    menuPageIsOpen: boolean;
}

const Burger: React.FC<Props> = ({ menuPageIsOpen }) => {
    return (
        <div>
            <div className={styles.burgerBtn}>
                <span/>
            </div>
        </div>
    );
};

export default Burger;