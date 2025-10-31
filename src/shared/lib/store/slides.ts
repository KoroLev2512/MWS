interface ICarouselSlides {
    textKey: string;
    image: string;
    backgroundColor: string;
}

interface IExampleSlides {
    titleKey: string;
    descriptionKey: string;
    image: string;
    background: string;
}

export const carousel_slides: ICarouselSlides[] = [
    {
        textKey: 'Web development',
        image: "/images/carousel/develop.svg",
        backgroundColor: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        textKey: 'Mobile apps',
        image: "/images/carousel/mobile.svg",
        backgroundColor: 'var(--GR_OR, linear-gradient(90deg, rgba(255, 75, 31, 0.93) 0%, #FF9068 100%)',
    },
    {
        textKey: 'SMM strategies',
        image: "/images/carousel/smm.svg",
        backgroundColor: 'var(--GR_DB, linear-gradient(90deg, #16222A 0%, #3A6073 100%)',
    },
    {
        textKey: 'Telegram bots',
        image: "/images/carousel/tg.svg",
        backgroundColor: 'var(--GR_TG, linear-gradient(90deg, #457FCA 0%, #5691C8 100%))',
    },
    {
        textKey: 'CRM systems',
        image: "/images/carousel/crm_systems.svg",
        backgroundColor: 'var(--GR_BL, linear-gradient(90deg, #000 0%, #434343 100%))',
    },
    {
        textKey: 'Business package',
        image: "/images/carousel/business.svg",
        backgroundColor: 'var(--GR_GR, linear-gradient(90deg, #29323C 0%, #485563 100%))',
    }
];

export const example_slides: IExampleSlides[] = [
    {
        titleKey: 'Landing page',
        descriptionKey: 'Landing page description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Business card',
        descriptionKey: 'Business card description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Corporate website',
        descriptionKey: 'Corporate website description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Mobile application',
        descriptionKey: 'Mobile application description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'CRM system',
        descriptionKey: 'CRM system description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Video editing',
        descriptionKey: 'Video editing description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Marketing',
        descriptionKey: 'Marketing description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Logos',
        descriptionKey: 'Logos description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'Advertising creatives',
        descriptionKey: 'Advertising creatives description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'CMS website',
        descriptionKey: 'CMS website description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        titleKey: 'SMM',
        descriptionKey: 'SMM description',
        image: "/images/examples/landing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    }
];