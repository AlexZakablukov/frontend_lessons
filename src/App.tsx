import {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import './index.scss'

export const App = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}