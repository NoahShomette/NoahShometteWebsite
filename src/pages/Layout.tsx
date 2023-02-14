import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import BeeComponent from "../resources/bee_ts";
import styles from "./Layout.module.css";
import {ButtonSize} from "../utils/options";

const Layout = () => {

    return (
        <>
            <div className={styles.beeHolder}>
                <div className={styles.bee}>
                    <BeeComponent/>
                </div>
            </div>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Layout;