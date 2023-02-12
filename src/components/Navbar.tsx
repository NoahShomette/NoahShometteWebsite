import styles from "../components/Navbar.module.css";
import {faUpRightFromSquare, faPalette, faBars, faX} from "@fortawesome/free-solid-svg-icons";
import LinkButtonWithBg from "./interface/LinkButtonWithBg";
import ButtonWithBg from "./interface/ButtonWithBg";
import VerticalSpacer from "./design/spacers/VerticalSpacer";
import ButtonWithoutBg from "./interface/ButtonWithoutBg";
import {useState} from "react";
import {useColors} from "../context/colorsContext";
import LinkButtonWithoutBg from "./interface/LinkButtonWithoutBg";

export default function Navbar() {
    const [mobileMenuVisible, setIsVisible] = useState(false);

    let colorContext = useColors();

    const handleMobileNavClick = () => {
        setIsVisible(!mobileMenuVisible);
    }

    let mobileMenuEnabled = "";

    if (mobileMenuVisible) {
        mobileMenuEnabled = styles.mobileMenuEnabled;
    }

    return (
        <nav className={[styles.navbar].join(" ")}>
            <div className={styles.name}>
                <div>NOAH</div>
                <div>SHOMETTE</div>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.buttons}>
                    <LinkButtonWithBg buttonLink={"/"} buttonText={"Home"}/>
                    <LinkButtonWithBg buttonLink={"/skills"} buttonText={"Skills"}/>
                    <LinkButtonWithBg buttonLink={"/projects"} buttonText={"Projects"}/>
                    <ButtonWithBg buttonText={"Github"} buttonLink={"https://github.com/NoahShomette"} icon={true}
                                  iconDefinition={faUpRightFromSquare} text={true} link={true}/>
                    <VerticalSpacer></VerticalSpacer>
                    <ButtonWithBg buttonText={""} buttonLink={""} icon={true}
                                  iconDefinition={faPalette} text={false} link={false}/>

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
                <ButtonWithoutBg buttonText={""} buttonLink={""} icon={true}
                                 iconDefinition={faBars} text={false} link={false}
                                 buttonOnClick={handleMobileNavClick}/>
                <div className={styles.mobileNavRightLine}>
                    <div className={styles.mobileLine}></div>
                </div>
            </div>

            <div className={[styles.mobileMenu, mobileMenuEnabled, styles.gradient].join(" ")}>
                <div className={styles.mobileMenuNavigation}>
                    <div className={styles.mobileMenuLineHolder}>
                        <div className={styles.mobileMenuLine}></div>
                    </div>
                    <ButtonWithoutBg buttonText={""} buttonLink={""} icon={true}
                                     iconDefinition={faX} text={false} link={false}
                                     buttonOnClick={handleMobileNavClick}/>
                </div>
                <div className={styles.mobileButtons}>
                    <LinkButtonWithoutBg buttonLink={"/"} buttonText={"Home"}/>
                    <LinkButtonWithoutBg buttonLink={"/skills"} buttonText={"Skills"}/>
                    <LinkButtonWithoutBg buttonLink={"/projects"} buttonText={"Projects"}/>
                    <ButtonWithoutBg buttonText={"Github"} buttonLink={"https://github.com/NoahShomette"} icon={true}
                                  iconDefinition={faUpRightFromSquare} text={true} link={true}/>
                </div>

                <div className={styles.colorSelector}>

                </div>

            </div>

        </nav>
    );

}