import React, { useState } from 'react';
import { Header } from "@/ui/Header";
import { Text } from "@/ui/Text";
import { Section } from "@/ui/Section";
import Image from "next/image";

import styles from './styles.module.scss';

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((s) => (s + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);


    export const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <Header/>
            {/*<HeroContent/>*/}
            <Section className={styles.main}>
                <Text as="h1" className={styles.title}>
                    Разработка сайтов, отражающих вашу уникальность и привлекающих клиентов
                </Text>
                <Image
                    src="/images/carousel/develop.png"
                    alt="Develop"
                    width={500}
                    height={300}
                />
            </Section>
        </div>
    )
};