import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ColorsProvider from "./context/colorsContext";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faUpRightFromSquare,
    faPlus,
    faX,
    faPalette,
    faBars,
    faCircleArrowLeft,
    faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";
import FourOhFour from "./pages/FourOhFour";
import {CookiesProvider} from "react-cookie";

library.add(fab, faUpRightFromSquare, faPlus, faX, faPalette, faBars, faCircleArrowLeft, faCircleArrowRight)

function App() {
    return (
        <CookiesProvider>
            <ColorsProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Index/>}></Route>
                            <Route path="skills" element={<Skills/>}></Route>
                            <Route path="projects" element={<Projects/>}></Route>
                            <Route path="*" element={<FourOhFour/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ColorsProvider>
        </CookiesProvider>
    );
}

export default App;
