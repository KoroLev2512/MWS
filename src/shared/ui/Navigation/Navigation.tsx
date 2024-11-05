import React from "react";
import { Text } from "../Text";

import styles from "./styles.module.scss";

export const Navigation = () => {
    return (
        <div className={styles.section}>
            <Text as="h4" className={styles.text}>Услуги</Text>
            <Text as="h4" className={styles.text}>Продукты</Text>
            <Text as="h4" className={styles.text}>Курсы</Text>
            <Text as="h4" className={styles.text}>Блог</Text>
            <Text as="h4" className={styles.text}>Поддержка</Text>
        </div>
    )
}