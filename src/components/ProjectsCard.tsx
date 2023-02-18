import styles from "./ProjectsCard.module.css";
import {faGlobe, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {ButtonSize} from "../utils/options";
import Button from "./interface/Button";
import React, {ReactNode} from "react";
import {useColors} from "../context/colorsContext";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Spacer from "./design/spacers/Spacer";

interface cardProps {
    projectTitle: String;
    projectDescription: string;
    projectPhotoPath: string;
    photoAlt: string;
    githubLink?: string;
    websiteLink?: string;
    websiteName?: string;
    bulletPoints?: string[];
    utilizes: string;
}

export default function ProjectsCard(props: cardProps) {

    let colors = useColors();

    function getGithub() {
        return (
            <>
                {props.githubLink ? <div className={styles.githubButton}>
                    <Button buttonText={"Github"} buttonLink={props.githubLink} icon={true}
                            iconDefinition={faGithub} text={true} link={true} background={false}
                            textSize={ButtonSize.extraSmall} iconSize={"1x"} textColor={colors.activeColor.colorMainAlt}
                            iconColor={colors.activeColor.colorMainAlt} textHover={colors.activeColor.colorMainAlt}
                            iconHover={colors.activeColor.colorMainAlt}/>
                </div> : <></>}
            </>

        )
    }

    function getSiteLink() {

        return (
            <>
                {props.websiteLink ? <div className={styles.websiteLink}>
                    <Button buttonText={props.websiteName || ""} buttonLink={props.websiteLink} icon={true}
                            iconDefinition={faGlobe} text={true} link={true} background={false}
                            textSize={ButtonSize.extraSmall} iconSize={"sm"} textColor={colors.activeColor.colorMainAlt}
                            iconColor={colors.activeColor.colorMainAlt} textHover={colors.activeColor.colorMainAlt}
                            iconHover={colors.activeColor.colorMainAlt}/>
                </div> : <></>}
            </>
        )
    }

    function getBulletPoints() {

        let content: ReactNode[] = [];
        let i = 0;
        props.bulletPoints?.forEach(bp => {
            i++;
            content.push(<div key={i}>{bp}</div>)
        })

        return content;
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>{props.projectTitle}</div>
            <div className={styles.spacer}>
                <Spacer color={colors.activeColor.colorContrast} height="3px" width="70%"></Spacer>
            </div>
            <div className={styles.description}>{props.projectDescription}</div>
            <div className={styles.photo}>
                <img src={props.projectPhotoPath} alt={props.photoAlt}/>
            </div>
            <div className={styles.bulletPoints}>
                {getBulletPoints()}
            </div>
            <div className={styles.utilizesHolder}>
                <div className={styles.utilizes}>
                    <span>Utilizes:</span> {props.utilizes}
                </div>
            </div>
            <div className={styles.buttonsBackground}>
                <div className={styles.buttons}>
                    {getGithub()}
                    {getSiteLink()}
                </div>
            </div>


        </div>
    )
}