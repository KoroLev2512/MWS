import React, { useState } from 'react';
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
    const [expandedFeatures, setExpandedFeatures] = useState<Set<string>>(new Set());

    const toggleFeature = (titleKey: string) => {
        setExpandedFeatures(prev => {
            const newSet = new Set(prev);
            if (newSet.has(titleKey)) {
                newSet.delete(titleKey);
            } else {
                newSet.add(titleKey);
            }
            return newSet;
        });
    };

    const heading = t('Six reasons to love MWS');
    const headingParts = heading.split(' ');
    const firstTwoWords = headingParts.slice(0, 2).join(' ');
    const remainingWords = headingParts.slice(2).join(' ');

    return (
        <div className={styles.wrapper}>
            <div className={styles.position}>
                <div className={styles.title}>
                    <Text as="h1">
                        <span className={styles.blue}>{firstTwoWords}</span>
                        {remainingWords ? ` ${remainingWords}` : ''}
                    </Text>
                </div>
            </div>
            <div className={styles.position}>
                <div className={styles.description}>
                    <Text as="h3">{t('Description')}</Text>
                </div>
            </div>
            {features.map((item) => (
                <div key={item[0].titleKey} className={styles.card_wrapper}>
                    {item.map(feature => {
                        const isExpanded = expandedFeatures.has(feature.titleKey);
                        return (
                            <div key={feature.titleKey} className={styles.list}>
                                {feature.icon}
                                <Text as="h3" className={styles.item}>
                                    {t(feature.titleKey)}
                                </Text>
                                <div className={`${styles.descriptionWrapper} ${styles.desktop}`}>
                                    <Text className={styles.requestsList}>
                                        {t(feature.descriptionKey)}
                                    </Text>
                                </div>
                                {isExpanded && (
                                    <div className={`${styles.descriptionWrapper} ${styles.mobile}`}>
                                        <Text className={styles.requestsList}>
                                            {t(feature.descriptionKey)}
                                        </Text>
                                    </div>
                                )}
                                <button 
                                    className={`${styles.moreButton} ${isExpanded ? styles.expanded : ''}`}
                                    onClick={() => toggleFeature(feature.titleKey)}
                                >
                                    {isExpanded ? t('Hide') : t('More')}
                                    <svg 
                                        className={styles.arrow}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="11" 
                                        height="5" 
                                        viewBox="0 0 11 5" 
                                        fill="none"
                                    >
                                        <path d="M0.217678 0.990783L5.09367 4.87327C5.15172 4.91935 5.2146 4.95192 5.28232 4.97097C5.35004 4.99032 5.4226 5 5.5 5C5.5774 5 5.64996 4.99032 5.71768 4.97097C5.7854 4.95192 5.84829 4.91935 5.90633 4.87327L10.7968 0.990783C10.9323 0.883256 11 0.748847 11 0.587557C11 0.426267 10.9274 0.288018 10.7823 0.172811C10.6372 0.0576034 10.4679 -6.34525e-09 10.2744 -8.65262e-09C10.0809 -1.096e-08 9.91161 0.0576033 9.76649 0.172811L5.5 3.55991L1.23351 0.172811C1.09807 0.0652841 0.931275 0.0115203 0.73314 0.0115203C0.534617 0.0115203 0.362797 0.0691241 0.217678 0.184331C0.0725594 0.299539 5.44496e-08 0.433947 5.26179e-08 0.587557C5.07861e-08 0.741167 0.0725594 0.875576 0.217678 0.990783Z"/>
                                    </svg>
                                </button>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};
