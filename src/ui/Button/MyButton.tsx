import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from "./types";

export const MyButton: React.FC<ButtonProps> = ({
                                                    children,
                                                    className,
                                                    ...restProps
                                                }: ButtonProps) => {
    return (
        <button
            className={styles.btn_connect}
            {...restProps}
        >
            {children}
        </button>
    );
};
