import React from "react";
import { createRoot } from 'react-dom/client';
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/components/ThemeProvider";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);