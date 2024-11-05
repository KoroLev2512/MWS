import React from "react";
import Home from "@/pages/Home/Home";
import {IntlProvider} from 'next-intl'
import {useRouter} from "next/router";


const App = () =>{
    const router = useRouter();
    const locale = router.locale || 'en';

    return (
        <IntlProvider locale={locale}>
            <Home/>
        </IntlProvider>
    )
}

export default App;
