import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Header } from '@/ui/Header';
import { Text } from "@/ui/Text";
import { CarouselSlide } from "@/ui/types";

import styles from './styles.module.scss';

interface CarouselProps {
    slides: CarouselSlide[];
}

export const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
    const [ , setActiveSlideIndex] = useState(0);
    const [backgroundStyle, setBackgroundStyle] = useState(slides[0].backgroundColor);

    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex;
        setActiveSlideIndex(swiper.realIndex);

        setTimeout(() => {
            setBackgroundStyle(slides[realIndex].backgroundColor);
        }, 0);
    };

    return (
        <div className={styles.hero} style={{ background: backgroundStyle }}>
            <div className={styles.bg}>
                <Header/>
                <div>
                    <Swiper
                        navigation={{
                            nextEl: '.styles.arrow:nth-child(1)',
                            prevEl: '.styles.arrow:nth-child(2)',
                        }}
                        loop={true}
                        autoplay={{delay: 5000, disableOnInteraction: false}}
                        pagination={{clickable: true}}
                        spaceBetween={50}
                        slidesPerView={1}
                        className={styles.carouselContainer}
                        onSlideChange={handleSlideChange}
                        speed={500}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className={styles.content}>
                                <div>
                                    <Text as="h1" className={styles.title}>
                                        {slide.text}
                                    </Text>
                                </div>
                                <div className={styles.image}>
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${index}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.controls}>
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
    );
};
