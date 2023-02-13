import React, {ReactNode, useContext, useEffect, useState} from "react";
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
    gradient: true,
    colorMain: "#FCEF04",
    colorSecondaryGradient: "#DC419B",
    colorMainAlt: "#FFC985",
    colorContrast: "#1C1C1C",
    colorLight: "#FFFFFF",
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
    const [activeColor, setColor] = useState<colorInfo>(colorInfoDefault);

    function updateColorCookie(color: colorInfo) {
        setCookie("activeColor", color, {path: "/"});
    }

    useEffect(() => {
        fetch("colors.json").then(function (res) {
            return res.json()
        }).then(function (colorsJson) {
            console.log(colorsJson);
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

    if (cookies.activeColor) {
        updateStyles(cookies.activeColor);
    } else {
        updateStyles(colorInfoDefault);
    }

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

