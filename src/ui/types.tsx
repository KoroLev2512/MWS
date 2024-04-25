export type LayoutType = {
    children?: JSX.Element;
};

export interface CarouselSlide {
    text: string;
    image: string;
    backgroundColor: string;
}

export interface ExampleSlide {
    title: string;
    description: string,
    imageTitle: string;
    imageSrc: string;
    backgroundSrc: string;
}
