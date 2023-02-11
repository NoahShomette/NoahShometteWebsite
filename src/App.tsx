import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ColorsProvider from "./context/colorsContext";

function App() {
    return (
        <ColorsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Index/>}></Route>
                        <Route path="skills" element={<Skills/>}></Route>
                        <Route path="projects" element={<Projects/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ColorsProvider>
    );
}

export default App;
