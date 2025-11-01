import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from "./types";

import styles from './styles.module.scss';

export { styles as filterButtonStyles };

export const FilterButton: React.FC<ButtonProps> = ({
                                                    children,
                                                    className,
                                                    ...restProps
                                                }: ButtonProps) => {
    return (
        <button
            className={classNames(styles.btn_filter, className)}
            suppressHydrationWarning
            {...restProps}
        >
            {children}
        </button>
    );
};