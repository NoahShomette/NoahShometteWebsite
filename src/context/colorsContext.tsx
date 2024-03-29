import React, {ReactNode, useContext, useEffect, useLayoutEffect, useState} from "react";
import {useCookies} from "react-cookie";

type colorInfo = {
    gradient: boolean,
    colorMain: string,
    colorSecondaryGradient: string,
    colorContrast: string,
    colorMainAlt: string,
    colorLight: string,
    colorDark: string
}

const colorInfoDefault: colorInfo = {
    gradient: false,
    colorMain: "#341D27",
    colorSecondaryGradient: "#468132",
    colorMainAlt: "#653D4E",
    colorContrast: "#F0A53B",
    colorLight: "#DBDBDB",
    colorDark: "#1C1C1C",
}

type colorContext = {
    activeColor: colorInfo,
    changeActiveColor: (newColor: colorInfo) => void,
    colors: colorInfo[],
    colorsLoaded: boolean,
}


let colors: colorInfo[];

const colorContextDefaultValues: colorContext = {
    activeColor: colorInfoDefault,
    changeActiveColor: (newColor: colorInfo) => {
    },
    colors: [],
    colorsLoaded: false,
};

export const ColorContext = React.createContext<colorContext>(colorContextDefaultValues);

export function useColors() {
    return useContext(ColorContext);
}

type Props = {
    children: ReactNode;
};

export default function ColorsProvider({children}: Props) {
    const [cookies, setCookie] = useCookies(["activeColor"]);
    const [colorsLoaded, setIsLoaded] = useState<boolean>(false);
    const [activeColor, setColor] = useState<colorInfo>(cookies.activeColor ? cookies.activeColor : colorInfoDefault);

    function updateColorCookie(color: colorInfo) {
        setCookie("activeColor", color, {path: "/", expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
    }

    useEffect(() => {
        fetch("colors.json").then(function (res) {
            return res.json()
        }).then(function (colorsJson) {
            colors = colorsJson.colors;
            setIsLoaded(true);
        });
    });

    const updateStyles = (newColor: colorInfo) => {
        if (newColor.gradient) {
            document.querySelector(':root')?.classList.add("gradient");
        } else {
            document.querySelector(':root')?.classList.remove("gradient");
        }
        document.documentElement.style
            .setProperty('--color-main', newColor.colorMain);
        document.documentElement.style
            .setProperty('--color-secondary-gradient', newColor.colorSecondaryGradient);
        document.documentElement.style
            .setProperty('--color-main-alt', newColor.colorMainAlt);
        document.documentElement.style
            .setProperty('--color-contrast', newColor.colorContrast);
        document.documentElement.style
            .setProperty('--color-light', newColor.colorLight);
        document.documentElement.style
            .setProperty('--color-dark', newColor.colorDark);
    }

    const changeActiveColor = (newColor: colorInfo) => {
        setColor(newColor);
        updateStyles(newColor);
        updateColorCookie(newColor);
    }

    useLayoutEffect(() => {
        updateStyles(activeColor);
        setColor(activeColor)
    });


    const value = {
        activeColor,
        changeActiveColor,
        colors,
        colorsLoaded,
    };

    return (
        <>
            <ColorContext.Provider value={value}>
                {children}
            </ColorContext.Provider>
        </>
    );
}

