import styles from "./Button.module.css";
import {ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {ButtonSize} from "../../utils/options";
import {v4 as uuidv4} from 'uuid';
import {useColors} from "../../context/colorsContext";


interface ButtonProps {
    //Specify if this button has text
    text: boolean;
    //specify what the text size is
    textSize: ButtonSize;
    // specify what the button text is
    buttonText: string;
    // change the text color, defaults to --color-contrast
    textColor?: string;
    // change the text color on hover, defaults to --color-main-alt
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
        if (props.background) {
            backgroundColor = props.backgroundHover ? props.backgroundHover : colors.activeColor.colorContrast;
        }
        textColor = props.textHover ? props.textHover : colors.activeColor.colorMainAlt;
        iconColor = props.iconHover ? props.iconHover : colors.activeColor.colorMainAlt;

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
                <a href={props.buttonLink} target="_blank" rel="noopener noreferrer"
                   className={[styles.button, buttonStyles].join(" ")}
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