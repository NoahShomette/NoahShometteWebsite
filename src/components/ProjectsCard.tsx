import styles from "./ProjectsCard.module.css";
import {faGlobe, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {ButtonSize} from "../utils/options";
import Button from "./interface/Button";
import React from "react";
import {useColors} from "../context/colorsContext";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface cardProps {
    projectTitle: String;
    projectDescription: string;
    projectPhotoPath: string;
    photoAlt: string;
    githubLink?: string;
    websiteLink?: string;
    websiteName?: string;

    bulletPointOne?: string;
    bulletPointTwo?: string;
    bulletPointThree?: string;

}

export default function ProjectsCard(props: cardProps) {

    let colors = useColors();

    function getGithub() {
        return (
            <>
                {props.githubLink ? <div className={styles.githubButton}>
                    <Button buttonText={"Github"} buttonLink={props.githubLink} icon={true}
                            iconDefinition={faGithub} text={true} link={true} background={false}
                            textSize={ButtonSize.extraSmall} iconSize={"1x"} textColor={colors.activeColor.colorDark}
                            iconColor={colors.activeColor.colorDark} textHover={colors.activeColor.colorDark}
                            iconHover={colors.activeColor.colorDark}/>
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
                            textSize={ButtonSize.extraSmall} iconSize={"sm"} textColor={colors.activeColor.colorDark}
                            iconColor={colors.activeColor.colorDark} textHover={colors.activeColor.colorDark}
                            iconHover={colors.activeColor.colorDark}/>
                </div> : <></>}
            </>
        )
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>{props.projectTitle}</div>
            <div className={styles.description}>{props.projectDescription}</div>
            <div className={styles.photo}>
                <img src={props.projectPhotoPath} alt={props.photoAlt}/>
            </div>
            <div className={styles.bulletPoints}>
                {props.bulletPointOne ? <div>{props.bulletPointOne}</div> : ""}
                {props.bulletPointTwo ? <div>{props.bulletPointTwo}</div> : ""}
                {props.bulletPointThree ? <div>{props.bulletPointThree}</div> : ""}
            </div>
            <div className={styles.buttons}>
                {getGithub()}
                {getSiteLink()}
            </div>

        </div>
    )
}