import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ERoutePath} from "shared/config/routeConfig/routeConfig";

const routes: RouteProps[] = [
    {
        path: ERoutePath.MAIN,
        element: <MainPage/>
    },
    {
        path: ERoutePath.ABOUT,
        element: <AboutPage/>
    }
]

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
