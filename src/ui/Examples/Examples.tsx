import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Text } from "@/ui/Text";
import { ExampleSlide } from "@/ui/types";
import { FilterButton } from "@/ui/Button/FilterButton";

import styles from "./styles.module.scss";

interface CategorySelectorProps {
    slides: ExampleSlide[];
}

export const Examples: React.FC<CategorySelectorProps> = ({ slides }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleFilterClick = (category: ExampleSlide) => {
        const index = slides.indexOf(category);
        setActiveIndex(index);
    };

    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                <Text as="h1">
                    Инновационные решения для вашего бизнеса: выберите ваш путь к успеху
                </Text>
                <div className={styles.filterContainer}>
                    {slides.map((slide, index) => (
                        <FilterButton
                            key={index}
                            onClick={() => handleFilterClick(slide)}
                            className={index === activeIndex ? styles.activeFilter : ''}
                        >
                            {slide.title}
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
                                    src={slide.imageSrc}
                                    className={styles.image}
                                    alt={`Slide ${index}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.controls}>
                    <Text as="h3" className={styles.description}>
                        {slides[activeIndex].description}
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
