import {Link} from "react-router-dom";
import styles from "../interface/LinkButton.module.css";
import {useState} from "react";
import {ButtonSize} from "../../utils/options";

interface ButtonProps {
    buttonText: string;
    buttonLink: string;
    buttonOnClick?: React.MouseEventHandler
    background: boolean;
    textSize: ButtonSize;
}

export default function LinkButtonWithBg(props: ButtonProps) {

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


    return (

        <Link className={[styles.button, buttonStyles].join(" ")} to={props.buttonLink} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} onClick={props.buttonOnClick}>
            <div className={[styles.text, textStyles].join(" ")}>{props.buttonText}</div>
        </Link>

    )
}