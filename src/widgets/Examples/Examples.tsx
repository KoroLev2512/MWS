import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Text} from "@/shared/ui/Text";
import {ExampleSlide} from "@/widgets/types";
import {FilterButton} from "@/shared/ui/Button/FilterButton";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.scss";

interface CategorySelectorProps {
    slides: ExampleSlide[];
}

export const Examples: React.FC<CategorySelectorProps> = ({slides}) => {
    const {t} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleFilterClick = (category: ExampleSlide) => {
        const index = slides.indexOf(category);
        setActiveIndex(index);
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
                            key={index}
                            onClick={() => handleFilterClick(slide)}
                            className={index === activeIndex ? styles.activeFilter : ''}
                        >
                            {t(slide.titleKey)}
                        </FilterButton>
                    ))}
                </div>
                <Swiper
                    pagination={{clickable: true}}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => swiper.slideTo(activeIndex)}
                    className={styles.carouselContainer}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <img
                                    src={slide.image}
                                    className={styles.image}
                                    alt={`Slide ${index}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.controls}>
                    <Text as="h3" className={styles.description}>
                        {t(slides[activeIndex].descriptionKey)}
                    </Text>
                    <div className={styles.arrowContainer}>
                        <img
                            className={styles.arrow}
                            src='/icons/slick-left-icon.svg'
                            alt={'<'}
                            width={7}
                            height={14}
                        />
                        <img
                            className={styles.arrow}
                            src='/icons/slick-right-icon.svg'
                            alt={'>'}
                            width={7}
                            height={14}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
