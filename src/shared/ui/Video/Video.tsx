import React from 'react';
import {Text} from "../Text";
import VideoPlayIcon from "@/shared/lib/icons/VideoPlayIcon";
import {useTranslation} from "react-i18next";

import styles from './styles.module.scss';


export const Video = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.video}>
                    <VideoPlayIcon/>
                </div>
                <Text as="h1" className={styles.text}>
                    {t('Watch to learn more about MWS')}
                </Text>
            </div>
        </div>
    );
};
