import React from 'react';
import { ButtonProps } from "./types";

import styles from './styles.module.scss';


export const FilterButton: React.FC<ButtonProps> = ({
                                                    children,
                                                    className,
                                                    ...restProps
                                                }: ButtonProps) => {
    return (
        <button
            className={styles.btn_filter}
            {...restProps}
        >
            {children}
        </button>
    );
};