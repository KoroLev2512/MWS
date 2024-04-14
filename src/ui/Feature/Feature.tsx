import React from 'react';
import { Section } from "../Section";
import { Text } from "../Text";

import styles from './styles.module.scss';
import InnovationIcon from "../../lib/icons/InnovationIcon";
import PersonalizationIcon from "../../lib/icons/PersonalizationIcon";
import SupportIcon from "../../lib/icons/SupportIcon";
import QuallityIcon from "../../lib/icons/QuallityIcon";
import ResultsIcon from "../../lib/icons/ResultsIcon";
import ExpertiseIcon from "../../lib/icons/ExpertiseIcon";

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
    return (
        <>
            <Section className={styles.title}>
                <Text as="h2">Шесть причин любить MWS</Text>
            </Section>
            <Section className={styles.description}>
                <div className={styles.textContainer}>
                    <Text as="h3">Сотни клиентов со всего мира выбирают нас для решения своих задач в цифровом пространстве. Множество компаний и индивидуальных предпринимателей вывели свой бизнес на новый уровень благодаря сайтам и приложениям, разработанным в MWS, а также маркетинговым стратегиям и SMM решениям.</Text>
                </div>
            </Section>
            <Section>
            {features.map((item) => (
                <div key={item[0].title} className={styles.wrapper}>
                    {item.map(feature => (
                        <div key={feature.title} className={styles.list}>
                            {feature.icon}
                            <Section>
                                <Text as="h3" className={styles.item}>
                                    {feature.title}
                                </Text>
                            </Section>
                            <Text className={styles.requestsList}>
                                {feature.description}
                            </Text>
                        </div>
                    ))}
                </div>
            ))}
        </Section>
        </>
    );
};
