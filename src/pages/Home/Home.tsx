import React from 'react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {CarouselComponent} from '@/ui/Carousel';
import {Features} from '@/ui/Feature';
import {Video} from "@/ui/Video/Video";
import {Examples} from "@/ui/Examples";
import {Promotion} from "@/ui/Promotion";
import {Footer} from "@/ui/Footer";
import {carousel_slides, example_slides} from '@/shared/lib/store/slides';


const Home: React.FC = () => {

    return (
        <div>
            <CarouselComponent slides={carousel_slides}/>
            <Features/>
            <Video/>
            <Examples slides={example_slides}/>
            <Promotion/>
            <Footer/>
            <SpeedInsights/>
        </div>
    );
};

export default Home;
