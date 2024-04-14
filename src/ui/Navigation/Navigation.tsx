import React from "react";

import styles from "./styles.module.scss";

export const Navigation = () => {
    return (
        <div className={styles.section}>
            <div>Услуги</div>
            <div>Продукты</div>
            <div>Курсы</div>
            <div>Блог</div>
            <div>Поддержка</div>
        </div>
    )
}