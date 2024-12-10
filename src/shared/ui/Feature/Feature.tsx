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

// interface FeatureProps {
//     title: string;
//     description: string;
//     icon: JSX.Element; // предположим, вы используете SVG или иконку компонента
// }

const features = [
    [
        {
            title: "Инновации",
            description: "Мы постоянно внедряем новейшие технологии и тренды в наши проекты, обеспечивая вашему бизнесу конкурентное преимущество.",
            icon: <InnovationIcon/>
        },
        {
            title: "Персонализация",
            description: "Каждый проект разрабатывается с учетом ваших уникальных потребностей и целей, чтобы достичь оптимальных результатов.",
            icon: <PersonalizationIcon/>
        },
        {
            title: "Экспертиза",
            description: "Наша команда состоит из опытных специалистов, готовых решать самые сложные задачи и превращать ваши идеи в реальность.",
            icon: <ExpertiseIcon/>
        },
        {
            title: "Поддержка",
            description: "Мы оказываем непрерывную поддержку и сопровождение на всех этапах сотрудничества, гарантируя вашему бизнесу стабильную работу и развитие.",
            icon: <SupportIcon/>
        },
        {
            title: "Качество",
            description: "Наши проекты отличаются высочайшим качеством исполнения, что гарантирует привлечение внимания вашей аудитории и достижение ваших целей.",
            icon: <QuallityIcon/>
        },
        {
            title: "Результаты",
            description: "Наши проекты отличаются высочайшим качеством исполнения, что гарантирует привлечение внимания вашей аудитории и достижение ваших целей.",
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
                    <Text as="h3">Сотни клиентов со всего мира выбирают нас для решения своих задач в цифровом
                        пространстве. Множество компаний и индивидуальных предпринимателей вывели свой бизнес на новый
                        уровень благодаря сайтам и приложениям, разработанным в MWS, а также маркетинговым стратегиям и
                        SMM решениям.</Text>
                </div>
            </div>
            {features.map((item) => (
                <div key={item[0].title} className={styles.card_wrapper}>
                    {item.map(feature => (
                        <div key={feature.title} className={styles.list}>
                            {feature.icon}
                                <Text as="h3" className={styles.item}>
                                    {feature.title}
                                </Text>
                            <div className={styles.position}>
                                <Text className={styles.requestsList}>
                                    {feature.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
