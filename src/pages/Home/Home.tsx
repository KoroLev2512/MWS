import React, {Suspense} from 'react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Carousel} from '@/widgets/Carousel';
import {Features} from '@/shared/ui/Feature';
import {Video} from "@/shared/ui/Video/Video";
import {Examples} from "@/widgets/Examples";
import {Promotion} from "@/shared/ui/Promotion";
import {Footer} from "@/widgets/Footer";
import {carousel_slides, example_slides} from '@/shared/lib/store/slides';


const Home: React.FC = () => {

    return (
        <Suspense fallback="">
            <Carousel slides={carousel_slides}/>
            <Features/>
            <Video/>
            <Examples slides={example_slides}/>
            <Promotion/>
            <Footer/>
            <SpeedInsights/>
        </Suspense>
    );
};

export default Home;
