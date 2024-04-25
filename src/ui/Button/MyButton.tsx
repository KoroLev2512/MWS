import React from 'react';
import { ButtonProps } from "./types";

import styles from './styles.module.scss';


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
