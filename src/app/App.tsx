import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <div className='page-wrapper'>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}