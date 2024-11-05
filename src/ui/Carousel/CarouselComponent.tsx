import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Header} from '@/ui/Header';
import {Text} from "@/ui/Text";
import {CarouselSlide} from "@/ui/types";

import styles from './styles.module.scss';

interface CarouselProps {
    slides: CarouselSlide[];
}

export const CarouselComponent: React.FC<CarouselProps> = ({slides}) => {
    const [, setActiveSlideIndex] = useState(0);
    const [backgroundStyle, setBackgroundStyle] = useState(slides[0].backgroundColor);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        const realIndex = swiper.realIndex;
        setActiveSlideIndex(realIndex);

        setTimeout(() => {
            setBackgroundStyle(slides[realIndex].backgroundColor);
        }, 0);
    };

    const handleNextSlide = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const handlePreviousSlide = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    return (
        <div className={styles.hero} style={{background: backgroundStyle}}>
            <div className={styles.bg}>
                <Header/>
                <div>
                    <Swiper
                        navigation={{
                            nextEl: `.${styles.arrow}:nth-child(2)`,
                            prevEl: `.${styles.arrow}:nth-child(1)`,
                        }}
                        loop={true}
                        autoplay={{delay: 5000, disableOnInteraction: false}}
                        pagination={{clickable: true}}
                        slidesPerView={1}
                        className={styles.carouselContainer}
                        onSlideChange={handleSlideChange}
                        onSwiper={setSwiperInstance}
                        speed={500}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className={styles.content}>
                                <Text as="h1" className={styles.title}>
                                    {slide.text}
                                </Text>
                                <img
                                    className={styles.image}
                                    src={slide.image}
                                    alt={`Slide ${index}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.controls}>
                    <img
                        onClick={handlePreviousSlide}
                        className={styles.arrow}
                        src='/icons/slick-left-icon.svg'
                        alt={'<'}
                        width={7}
                        height={14}
                    />
                    <img
                        onClick={handleNextSlide}                        className={styles.arrow}
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