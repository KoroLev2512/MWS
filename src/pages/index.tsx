import React, {Suspense} from "react";
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Carousel} from '@/widgets/Carousel';
import {Features} from '@/shared/ui/Feature';
import {Video} from "@/shared/ui/Video/Video";
import {Examples} from "@/widgets/Examples";
import {Promotion} from "@/shared/ui/Promotion";
import {Footer} from "@/widgets/Footer";
import {carousel_slides, example_slides} from '@/shared/lib/store/slides';

const App = () =>{
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div id="services">
                <Carousel slides={carousel_slides}/>
            </div>
            <div id="products">
                <Features/>
            </div>
            <div id="courses">
                <Video/>
            </div>
            <div id="blog">
                <Examples slides={example_slides}/>
            </div>
            <div id="support">
                <Promotion/>
            </div>
            <Footer/>
            <SpeedInsights/>
        </Suspense>
    )
}

export default App;
