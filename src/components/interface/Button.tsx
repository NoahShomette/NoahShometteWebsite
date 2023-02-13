import styles from "./Button.module.css";
import {ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {ButtonSize} from "../../utils/options";


interface ButtonProps {
    text: boolean;
    buttonText: string;
    link: boolean;
    buttonLink: string;

    icon: boolean;
    iconDefinition: IconDefinition;
    buttonOnClick?: React.MouseEventHandler;
    background: boolean;
    textSize: ButtonSize;
}

export default function ButtonWithBg(props: ButtonProps) {

    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true)
    }

    function handleMouseLeave() {
        setHovered(false)
    }

    let buttonStyles = "";
    let textStyles = "";

    if (hovered) {
        buttonStyles = buttonStyles + " " + styles.hovered;
        textStyles = textStyles + " " + styles.hovered;
    }

    if (props.background) {
        buttonStyles = buttonStyles + " " + styles.background;
    }

    switch (props.textSize) {
        case ButtonSize.extraSmall:
            textStyles = textStyles + " " + styles.extraSmall;
            break;
        case ButtonSize.small:
            textStyles = textStyles + " " + styles.small;
            break;
        case ButtonSize.large:
            textStyles = textStyles + " " + styles.large;
            break;
        case ButtonSize.extraLarge:
            textStyles = textStyles + " " + styles.extraLarge;
            break;
        default:
            break;
    }

    function getButton() {
        if (props.link) {
            return (
                <a href={props.buttonLink} className={[styles.button, buttonStyles].join(" ")}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}>
                    {getContent()}
                </a>
            )
        } else {
            return (<div className={[styles.button, buttonStyles].join(" ")} onMouseEnter={handleMouseEnter}
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
                iconSize = "lg"
            }
            content.push(<div>
                <FontAwesomeIcon icon={props.iconDefinition} className={[styles.icon, textStyles].join(" ")}
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
                <div className={[styles.text, textStyles].join(" ")}>{props.buttonText}</div>
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