// noinspection SpellCheckingInspection

import {useColors} from "../context/colorsContext";
import styles from "./colorSelector.module.css";
import {ReactNode, useState} from "react";
import Button from "./interface/Button";
import {ButtonSize} from "../utils/options";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function ColorSelector() {

    const [colorTab, setColorTab] = useState(0)
    let {colors, changeActiveColor, colorsLoaded, activeColor} = useColors();

    let tabCount = colorsLoaded ? Math.floor(colors.length / 4) : 0;

    if (colorsLoaded && colors.length % 4 === 0) {
        tabCount = tabCount - 1;
    }

    const handleTabLeft = () => {
        if (colorTab > 0) {
            setColorTab(colorTab - 1);
        }
    }

    const handleTabRight = () => {
        if (colorTab < tabCount) {
            setColorTab(colorTab + 1);
        }
    }

    function getTabDots(tabSelected: number) {
        let content: ReactNode[] = [];

        for (let i = 0; i <= tabCount; i++) {

            if (i === colorTab) {
                content.push(<div className={[styles.dot, styles.dotActive].join(" ")} key={3 + i * 10}></div>)
            } else {
                content.push(<div className={styles.dot} key={3 + i * 10}></div>)
            }
        }

        return (
            content
        )
    }


    function getNavigation() {

        return (
            <div className={styles.navigation} key={2}>
                <Button text={false} buttonText={""} link={false} buttonLink={""} icon={true}
                        iconDefinition={faCircleArrowLeft} background={false} textSize={ButtonSize.medium}
                        iconSize={"2x"} buttonOnClick={handleTabLeft} iconColor={activeColor.colorDark}
                        iconHover={activeColor.colorContrast} aria-label="Previous Tab"/>
                <div className={styles.dotHolder}>
                    {getTabDots(colorTab)}
                </div>
                <Button text={false} buttonText={""} link={false} buttonLink={""} icon={true}
                        iconDefinition={faCircleArrowRight} background={false} textSize={ButtonSize.medium}
                        iconSize={"2x"} buttonOnClick={handleTabRight} iconColor={activeColor.colorDark}
                        iconHover={activeColor.colorContrast} aria-label="Next Tab"/>
            </div>
        )
    }

    function getSwatches() {
        let content: ReactNode[] = [];

        if (colorsLoaded) {
            for (let i = colorTab * 4; i < colorTab * 4 + 4; i++) {
                if (i > colors.length - 1) {
                    break;
                }
                content.push(getSwatch(i));
            }
        }

        return (
            content
        )
    }

    function getSwatch(index: number) {
        if (colorsLoaded) {
            let color = colors[index];
            return (
                <div className={styles.swatchGroup} onClick={() => changeActiveColor(colors[index])} key={index}>
                    {color.gradient ? <div
                            style={{background: "linear-gradient(120deg, " + color.colorMain + " 0%, " + color.colorSecondaryGradient + " 100%)"}}
                            className={styles.swatch}></div>
                        : <div style={{backgroundColor: color.colorMain}} className={styles.swatch}></div>
                    }

                    <div style={{backgroundColor: color.colorMainAlt}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorContrast}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorDark}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorLight}} className={styles.swatch}></div>
                </div>
            )
        }
    }

    return (
        <>
            <div className={styles.body} key={0}>
                {getNavigation()}
                <div className={styles.swatches}>
                    {getSwatches()}
                </div>

            </div>

        </>
    )

}