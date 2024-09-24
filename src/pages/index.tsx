import React from "react";
import {HomeLayout} from "@/layouts/Home/HomeLayout";
import {IntlProvider} from 'next-intl'
import {useRouter} from "next/router";


const App = () =>{
    const router = useRouter();
    const locale = router.locale || 'en';

    return (
        <IntlProvider locale={locale}>
            <HomeLayout/>
        </IntlProvider>
    )
}

export default App;
