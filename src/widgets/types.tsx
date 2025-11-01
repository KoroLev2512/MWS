export type LayoutType = {
    children?: React.ReactElement;
};

export interface CarouselSlide {
    textKey: string;
    image: string;
    backgroundColor: string;
}

export interface ExampleSlide {
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
