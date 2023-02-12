import {Link} from "react-router-dom";
import styles from "./ButtonWithoutBg.module.css";
import {ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
    text: boolean;
    buttonText: string;
    link: boolean;
    buttonLink: string;

    icon: boolean;
    iconDefinition: IconDefinition;
    buttonOnClick?: React.MouseEventHandler;
}

export default function ButtonWithoutBg(props: ButtonProps) {

    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true)
    }

    function handleMouseLeave() {
        setHovered(false)
    }

    let hoveredStyles = "";

    if (hovered) {
        hoveredStyles = styles.hovered;
    }

    function getButton() {
        if (props.link) {
            return (
                <a href={props.buttonLink} className={[styles.button, hoveredStyles].join(" ")}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}>
                    {getContent()}
                </a>
            )
        } else {
            return(<div className={[styles.button, hoveredStyles].join(" ")} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}>
                {getContent()}
            </div>)
        }
    }

    function getContent() {

        let content: ReactNode[] = [];

        let iconSize: SizeProp = "1x";

        if (props.icon) {

            if (!props.text) {
                iconSize = "xl"
            }
            content.push(<div>
                <FontAwesomeIcon icon={props.iconDefinition} className={[styles.icon, hoveredStyles].join(" ")}
                                 size={iconSize}/>
            </div>)
        }

        if (props.text && props.icon) {
            content.push(
                <div className={styles.spacer}></div>
            )
        }

        if (props.text) {
            content.push(
                <div className={[styles.text, hoveredStyles].join(" ")}>{props.buttonText}</div>
            )
        }

        return (
            content
        )
    }

    return (
        getButton()
    )
}