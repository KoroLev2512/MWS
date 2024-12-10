import React from "react";
import Home from "@/pages/Home/Home";
import {IntlProvider} from 'next-intl'
import {useRouter} from "next/router";
import "@/shared/config/i18n/i18n";


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
