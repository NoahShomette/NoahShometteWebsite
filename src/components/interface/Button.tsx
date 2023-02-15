import styles from "./Button.module.css";
import {ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {ButtonSize} from "../../utils/options";
import {v4 as uuidv4} from 'uuid';
import {useColors} from "../../context/colorsContext";


interface ButtonProps {
    text: boolean;
    textSize: ButtonSize;
    buttonText: string;
    textColor?: string;
    textHover?: string;

    link: boolean;
    buttonLink: string;

    icon: boolean;
    iconDefinition: IconDefinition;
    iconSize: SizeProp;
    iconColor?: string;
    iconHover?: string;

    background: boolean;
    backgroundColor?: string;
    backgroundHover?: string;

    buttonOnClick?: React.MouseEventHandler;

}

export default function Button(props: ButtonProps) {
    let colors = useColors();

    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true)
    }

    function handleMouseLeave() {
        setHovered(false)
    }

    let buttonStyles = "";
    let textStyles = "";
    let backgroundColor = props.backgroundColor ? props.backgroundColor : colors.activeColor.colorMainAlt;
    let textColor = props.textColor ? props.textColor : colors.activeColor.colorContrast;
    let iconColor = props.iconColor ? props.iconColor : colors.activeColor.colorContrast;

    if (hovered) {
        buttonStyles = buttonStyles + " " + styles.hovered;
        textStyles = textStyles + " " + styles.hovered;
        if (props.backgroundHover) backgroundColor = props.backgroundHover;
        if (props.textHover) textColor = props.textHover;
        if (props.iconHover) iconColor = props.iconHover;
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
                   onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}
                   {...props.background ? {style: {backgroundColor: backgroundColor}} : undefined}
                >
                    {getContent()}
                </a>
            )
        } else {
            return (<div className={[styles.button, buttonStyles].join(" ")} onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}
                         {...props.background ? {style: {backgroundColor: backgroundColor}} : undefined}
            >
                {getContent()}
            </div>)
        }
    }

    function getContent() {

        let content: ReactNode[] = [];

        if (props.icon) {
            content.push(<div key={0}>
                <FontAwesomeIcon icon={props.iconDefinition} className={[styles.icon, buttonStyles].join(" ")}
                                 size={props.iconSize} style={{color: iconColor}}/>
            </div>)
        }

        if (props.text && props.icon) {
            content.push(
                <div className={styles.spacer} key={1}></div>
            )
        }

        if (props.text) {
            content.push(
                <div className={[styles.text, textStyles].join(" ")} key={2}
                     style={{color: textColor}}>{props.buttonText}</div>
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