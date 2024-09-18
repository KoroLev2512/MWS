import React from 'react';
import { Text } from "@/ui/Text";
import VideoPlayIcon from "@/lib/icons/VideoPlayIcon";

import styles from './styles.module.scss';


export const Video = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.video}>
                    <VideoPlayIcon/>
                </div>
                <Text as="h1" className={styles.text}>
                    Cмотрите, чтобы узнать больше об MWS!
                </Text>
            </div>
        </div>
    );
};
