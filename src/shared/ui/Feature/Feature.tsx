import React from 'react';
import {Text} from "../Text";

import InnovationIcon from "@/shared/lib/icons/InnovationIcon";
import PersonalizationIcon from "@/shared/lib/icons/PersonalizationIcon";
import SupportIcon from "@/shared/lib/icons/SupportIcon";
import QuallityIcon from "@/shared/lib/icons/QuallityIcon";
import ResultsIcon from "@/shared/lib/icons/ResultsIcon";
import ExpertiseIcon from "@/shared/lib/icons/ExpertiseIcon";

import styles from './styles.module.scss';
import {useTranslation} from "react-i18next";

const features = [
    [
        {
            titleKey: "Innovation",
            descriptionKey: "Innovation description",
            icon: <InnovationIcon/>
        },
        {
            titleKey: "Personalization",
            descriptionKey: "Personalization description",
            icon: <PersonalizationIcon/>
        },
        {
            titleKey: "Expertise",
            descriptionKey: "Expertise description",
            icon: <ExpertiseIcon/>
        },
        {
            titleKey: "Support feature",
            descriptionKey: "Support feature description",
            icon: <SupportIcon/>
        },
        {
            titleKey: "Quality",
            descriptionKey: "Quality description",
            icon: <QuallityIcon/>
        },
        {
            titleKey: "Results",
            descriptionKey: "Results description",
            icon: <ResultsIcon/>
        },
    ]
]

export const Features = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.wrapper}>
            <div className={styles.position}>
                <div className={styles.title}>
                    <Text as="h2">{t('Six reasons to love MWS')}</Text>
                </div>
            </div>
            <div className={styles.position}>
                <div className={styles.description}>
                    <Text as="h3">{t('Description')}</Text>
                </div>
            </div>
            {features.map((item) => (
                <div key={item[0].titleKey} className={styles.card_wrapper}>
                    {item.map(feature => (
                        <div key={feature.titleKey} className={styles.list}>
                            {feature.icon}
                                <Text as="h3" className={styles.item}>
                                    {t(feature.titleKey)}
                                </Text>
                            <div className={styles.position}>
                                <Text className={styles.requestsList}>
                                    {t(feature.descriptionKey)}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
