import {Link} from "react-router-dom";
import styles from "../interface/LinkButton.module.css";
import {useState} from "react";
import {ButtonSize} from "../../utils/options";
import {useColors} from "../../context/colorsContext";

interface ButtonProps {
    buttonText: string;
    textSize: ButtonSize;
    buttonLink: string;
    // change the text color, defaults to --color-contrast
    textColor?: string;
    // change the text color on hover, defaults to --color-main-alt
    textHover?: string;

    background: boolean;
    backgroundColor?: string;
    backgroundHover?: string;

    buttonOnClick?: React.MouseEventHandler

}

export default function LinkButtonWithBg(props: ButtonProps) {
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

    if (hovered) {
        buttonStyles = buttonStyles + " " + styles.hovered;
        textStyles = textStyles + " " + styles.hovered;
        if (props.background) {
            backgroundColor = props.backgroundHover ? props.backgroundHover : colors.activeColor.colorContrast;
        }
        textColor = props.textHover ? props.textHover : colors.activeColor.colorMainAlt;
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


    return (

        <Link className={[styles.button, buttonStyles].join(" ")} to={props.buttonLink} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={props.buttonOnClick} {...props.background ? {style: {backgroundColor: backgroundColor}} : undefined}>
            <div className={[styles.text, textStyles].join(" ")} style={{color: textColor}}>{props.buttonText}</div>
        </Link>

    )
}