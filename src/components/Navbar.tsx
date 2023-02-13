import styles from "../components/Navbar.module.css";
import {faBars, faPalette, faUpRightFromSquare, faX} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./interface/LinkButton";
import Button from "./interface/Button";
import VerticalSpacer from "./design/spacers/VerticalSpacer";
import React, {useState} from "react";
import {useColors} from "../context/colorsContext";
import {ButtonSize} from "../utils/options";
import ColorSelector from "./colorSelector";

export default function Navbar() {
    const [mobileMenuVisible, setMobileMenuIsVisible] = useState(false);
    const [colorSelectorVisible, setColorSelectorIsVisible] = useState(false);

    let colorContext = useColors();

    const handleMobileNavClick = () => {
        setMobileMenuIsVisible(!mobileMenuVisible);
    }

    const handleColorSelectorClick = () => {
        setColorSelectorIsVisible(!colorSelectorVisible);
    }

    let colorSelectorEnabled = "";
    if (colorSelectorVisible) {
        colorSelectorEnabled = styles.colorSelectorEnabled;
    }

    let mobileMenuEnabled = "";
    if (mobileMenuVisible) {
        mobileMenuEnabled = styles.mobileMenuEnabled;
    }

    let gradient = "";
    if (colorContext.activeColor.gradient) {
        gradient = styles.gradient;
    }

    return (
        <nav className={[styles.navbar].join(" ")}>
            <div className={styles.name}>
                <div>NOAH</div>
                <div>SHOMETTE</div>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.buttons}>
                    <LinkButton buttonLink={"/"} buttonText={"Home"} background={true} textSize={ButtonSize.small}/>
                    <LinkButton buttonLink={"/skills"} buttonText={"Skills"} background={true}
                                textSize={ButtonSize.small}/>
                    <LinkButton buttonLink={"/projects"} buttonText={"Projects"} background={true}
                                textSize={ButtonSize.small}/>
                    <Button buttonText={"Github"} buttonLink={"https://github.com/NoahShomette"} icon={true}
                            iconDefinition={faUpRightFromSquare} text={true} link={true} background={true}
                            textSize={ButtonSize.small} iconSize={"sm"}/>
                    <VerticalSpacer></VerticalSpacer>
                    <Button buttonText={""} buttonLink={""} icon={true}
                            iconDefinition={faPalette} text={false} link={false} background={true}
                            textSize={ButtonSize.small} buttonOnClick={handleColorSelectorClick} iconSize={"lg"}/>

                </div>
                <div className={styles.lineHolder}>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div onClick={handleMobileNavClick}
                 className={[styles.mobileBackgroundBlur, mobileMenuEnabled].join(" ")}></div>


            <div className={styles.mobileRightSide}>
                <div className={styles.mobileNavLeftLine}>
                    <div className={styles.mobileLine}></div>
                </div>
                <div className={styles.hamburger}>
                    <Button buttonText={""} buttonLink={""} icon={true}
                            iconDefinition={faBars} text={false} link={false}
                            buttonOnClick={handleMobileNavClick} background={false} textSize={ButtonSize.medium}
                            iconSize={"xl"}/>
                </div>

                <div className={styles.mobileNavRightLine}>
                    <div className={styles.mobileLine}></div>
                </div>
            </div>

            <div className={[styles.mobileMenu, mobileMenuEnabled, gradient].join(" ")}>
                <div className={styles.mobileMenuNavigation}>
                    <div className={styles.mobileMenuLineHolder}>
                        <div className={styles.mobileMenuLine}></div>
                    </div>
                    <div className={styles.mobileMenuCloseButton}>
                        <Button buttonText={""} buttonLink={""} icon={true}
                                iconDefinition={faX} text={false} link={false}
                                buttonOnClick={handleMobileNavClick} background={false} textSize={ButtonSize.medium}
                                iconSize={"lg"}/>
                    </div>

                </div>
                <div className={styles.mobileButtons}>
                    <LinkButton buttonLink={"/"} buttonText={"Home"} background={false} textSize={ButtonSize.medium}/>
                    <LinkButton buttonLink={"/skills"} buttonText={"Skills"} background={false}
                                textSize={ButtonSize.medium}/>
                    <LinkButton buttonLink={"/projects"} buttonText={"Projects"} background={false}
                                textSize={ButtonSize.medium}/>
                    <Button buttonText={"Github"} buttonLink={"https://github.com/NoahShomette"} icon={true}
                            iconDefinition={faUpRightFromSquare} text={true} link={true} background={false}
                            textSize={ButtonSize.medium} iconSize={"lg"}/>
                </div>
                <div className={styles.mobileColorSelector}>
                    <ColorSelector></ColorSelector>
                </div>
                
            </div>
            <div className={[styles.colorSelector, colorSelectorEnabled].join(" ")}>
                <ColorSelector></ColorSelector>
            </div>
        </nav>
    );

}