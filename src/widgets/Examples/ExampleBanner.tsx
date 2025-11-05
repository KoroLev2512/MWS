import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { ExampleSlide } from '@/widgets/types';

import styles from './ExampleBanner.module.scss';

interface ExampleBannerProps {
    slide: ExampleSlide;
    index?: number;
}

export const ExampleBanner: React.FC<ExampleBannerProps> = ({ slide }) => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    
    // Listen for language changes and force re-render
    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLang(lng);
        };
        
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n, i18n.language]);

    return (
        <div className={styles.banner} style={{background: slide.background}}>
            <div className={styles.waveBackground} />
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <Text as="h2" className={styles.title}>
                        {t(slide.titleKey)}
                    </Text>
                    <Text as="p" className={styles.description}>
                        {t(slide.descriptionKey)}
                    </Text>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={slide.image}
                    className={styles.image}
                    alt={t(slide.titleKey)}
                    width={388}
                    height={600}
                    priority
                />
            </div>
            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <Text as="span" className={styles.statNumber}>{slide.stats.stat1.value}</Text>
                    <Text as="span" className={styles.statLabel}>{t(slide.stats.stat1.labelKey)}</Text>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                    <Text as="span" className={styles.statNumber}>{slide.stats.stat2.value}</Text>
                    <Text as="span" className={styles.statLabel}>{t(slide.stats.stat2.labelKey)}</Text>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                    <Text as="span" className={styles.statNumber}>{slide.stats.stat3.value}</Text>
                    <Text as="span" className={styles.statLabel}>{t(slide.stats.stat3.labelKey)}</Text>
                </div>
            </div>
        </div>
    );
};

