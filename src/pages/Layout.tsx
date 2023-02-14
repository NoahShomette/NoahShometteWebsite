import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import BeeComponent from "../resources/bee_ts";
import styles from "./Layout.module.css";
import {ButtonSize} from "../utils/options";

const Layout = () => {
    const [leftPixels, setLeftPixels] = useState(300);

    useEffect(() => {
        window.addEventListener("resize", function handleWindowResize() {
            if (window.innerWidth > 800) {
                setLeftPixels((leftPixels + window.innerWidth) - 2000);
            } else {
                setLeftPixels((leftPixels + 200 + window.innerWidth) - 2000);
            }
        });
        return () => window.removeEventListener("resize", function handleWindowResize() {
            setLeftPixels((leftPixels + window.innerWidth) - 2000);
        });
    }, []);

    useEffect(() => {
        let bee = document.getElementsByClassName(styles.bee)[0];

        if (bee instanceof HTMLElement) {
            console.log(leftPixels);
            bee.style.left = leftPixels + "px";
        }
    });


    return (
        <>
            <div className={styles.bee}>
                <BeeComponent/>
            </div>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Layout;