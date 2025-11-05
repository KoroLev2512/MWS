import React, {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Header} from '../Header';
import {Text} from "@/shared/ui/Text";
import {CarouselSlide} from "@/widgets/types";
import {useTranslation} from "react-i18next";

import styles from './styles.module.scss';

interface CarouselProps {
    slides: CarouselSlide[];
}

export const Carousel: React.FC<CarouselProps> = ({slides}) => {
    const {t} = useTranslation();
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
                                    {t(slide.textKey)}
                                </Text>
                                <Image
                                    className={styles.image}
                                    src={slide.image}
                                    alt={`Slide ${index}`}
                                    width={600}
                                    height={600}
                                    priority={index === 0}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.controls}>
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
    );
};