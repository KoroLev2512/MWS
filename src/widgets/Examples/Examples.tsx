"use client";

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {Text} from "@/shared/ui/Text";
import {ExampleSlide} from "@/widgets/types";
import {FilterButton, filterButtonStyles} from "@/shared/ui/Button/FilterButton";
import {useTranslation} from "react-i18next";
import {ExampleBanner} from "./ExampleBanner";

import styles from "./styles.module.scss";

interface CategorySelectorProps {
    slides: ExampleSlide[];
}

export const Examples: React.FC<CategorySelectorProps> = ({slides}) => {
    const {t, i18n} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    
    // Listen for language changes and force re-render
    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng);
        };
        
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n, i18n.language]);

    const handleFilterClick = (index: number) => {
        setActiveIndex(index);
    };

    const handlePreviousSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                <Text as="h1">
                    {t('Innovative solutions for your business')}
                </Text>
                <div className={styles.filterContainer}>
                    {slides.map((slide, index) => (
                        <FilterButton
                            key={`${index}-${currentLanguage}`}
                            onClick={() => handleFilterClick(index)}
                            className={index === activeIndex ? filterButtonStyles.activeFilter : ''}
                        >
                            {t(slide.titleKey)}
                        </FilterButton>
                    ))}
                </div>
                <ExampleBanner 
                    key={`${activeIndex}-${currentLanguage}`} 
                    slide={slides[activeIndex]} 
                    index={activeIndex} 
                />
                <div className={styles.controls}>
                    <Text as="h3" className={styles.description}>
                        {t(slides[activeIndex].descriptionKey)}
                    </Text>
                    <div className={styles.arrowContainer}>
                        <div className={styles.arrow} onClick={handlePreviousSlide}>
                            <Image
                                src='/icons/slick-left-icon.svg'
                                alt={'<'}
                                width={7}
                                height={14}
                            />
                        </div>
                        <div className={styles.arrow} onClick={handleNextSlide}>
                            <Image
                                src='/icons/slick-right-icon.svg'
                                alt={'>'}
                                width={7}
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};