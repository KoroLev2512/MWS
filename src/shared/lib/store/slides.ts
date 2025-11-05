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
    stats: {
        stat1: { value: string; labelKey: string };
        stat2: { value: string; labelKey: string };
        stat3: { value: string; labelKey: string };
    };
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
        stats: {
            stat1: { value: '127', labelKey: 'Landings created' },
            stat2: { value: '45%', labelKey: 'Average conversion' },
            stat3: { value: '7', labelKey: 'Days average' }
        }
    },
    {
        titleKey: 'Business card',
        descriptionKey: 'Business card description',
        image: "/images/examples/business-card.png",
        background: 'linear-gradient(90deg, rgba(255, 75, 31, 0.93) 0%, #FF9068 100%)',
        stats: {
            stat1: { value: '231', labelKey: 'Business cards' },
            stat2: { value: '3-5', labelKey: 'Days to create' },
            stat3: { value: '89%', labelKey: 'Satisfied clients' }
        }
    },
    {
        titleKey: 'Corporate website',
        descriptionKey: 'Corporate website description',
        image: "/images/examples/corporate-website.png",
        background: 'linear-gradient(90deg, #16222A 0%, #3A6073 100%)',
        stats: {
            stat1: { value: '64', labelKey: 'Corporate sites' },
            stat2: { value: '7', labelKey: 'Years of experience' },
            stat3: { value: '20+', labelKey: 'Pages average' }
        }
    },
    {
        titleKey: 'Mobile application',
        descriptionKey: 'Mobile application description',
        image: "/images/examples/mobile-app.png",
        background: 'linear-gradient(90deg, #457FCA 0%, #5691C8 100%)',
        stats: {
            stat1: { value: '38', labelKey: 'Apps developed' },
            stat2: { value: '2M+', labelKey: 'Total downloads' },
            stat3: { value: '2', labelKey: 'Platforms' }
        }
    },
    {
        titleKey: 'CRM system',
        descriptionKey: 'CRM system description',
        image: "/images/examples/crm-system.png",
        background: 'linear-gradient(90deg, #000 0%, #434343 100%)',
        stats: {
            stat1: { value: '19', labelKey: 'CRM systems built' },
            stat2: { value: '85%', labelKey: 'Process automation' },
            stat3: { value: '5000+', labelKey: 'Active users' }
        }
    },
    {
        titleKey: 'Video editing',
        descriptionKey: 'Video editing description',
        image: "/images/examples/video-editing.png",
        background: 'linear-gradient(90deg, #29323C 0%, #485563 100%)',
        stats: {
            stat1: { value: '420+', labelKey: 'Videos edited' },
            stat2: { value: '1200', labelKey: 'Hours of editing' },
            stat3: { value: '78', labelKey: 'Projects completed' }
        }
    },
    {
        titleKey: 'Marketing',
        descriptionKey: 'Marketing description',
        image: "/images/examples/marketing.png",
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
        stats: {
            stat1: { value: '156', labelKey: 'Campaigns launched' },
            stat2: { value: '320%', labelKey: 'Average ROI' },
            stat3: { value: '92', labelKey: 'Happy clients' }
        }
    },
    {
        titleKey: 'Logos',
        descriptionKey: 'Logos description',
        image: "/images/examples/logos.png",
        background: 'linear-gradient(90deg, rgba(255, 75, 31, 0.93) 0%, #FF9068 100%)',
        stats: {
            stat1: { value: '340+', labelKey: 'Logos designed' },
            stat2: { value: '120', labelKey: 'Brands created' },
            stat3: { value: '6', labelKey: 'Years in design' }
        }
    },
    {
        titleKey: 'Advertising creatives',
        descriptionKey: 'Advertising creatives description',
        image: "/images/examples/creatives.png",
        background: 'linear-gradient(90deg, #16222A 0%, #3A6073 100%)',
        stats: {
            stat1: { value: '580+', labelKey: 'Creatives made' },
            stat2: { value: '210', labelKey: 'Ad campaigns' },
            stat3: { value: '52%', labelKey: 'CTR increase' }
        }
    },
    {
        titleKey: 'CMS website',
        descriptionKey: 'CMS website description',
        image: "/images/examples/cms-website.png",
        background: 'linear-gradient(90deg, #457FCA 0%, #5691C8 100%)',
        stats: {
            stat1: { value: '145', labelKey: 'CMS websites' },
            stat2: { value: '25+', labelKey: 'Integrations' },
            stat3: { value: '24/7', labelKey: '24/7 Support' }
        }
    },
    {
        titleKey: 'SMM',
        descriptionKey: 'SMM description',
        image: "/images/examples/smm.png",
        background: 'linear-gradient(90deg, #000 0%, #434343 100%)',
        stats: {
            stat1: { value: '87', labelKey: 'Accounts managed' },
            stat2: { value: '2.5M', labelKey: 'Followers gained' },
            stat3: { value: '12K+', labelKey: 'Posts published' }
        }
    }
];