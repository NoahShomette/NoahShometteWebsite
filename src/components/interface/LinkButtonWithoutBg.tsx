import {Link} from "react-router-dom";
import styles from "../interface/LinkButtonWithoutBg.module.css";
import {useState} from "react";

interface ButtonProps {
    buttonText: string;
    buttonLink: string;
    buttonOnClick?: React.MouseEventHandler
}

export default function LinkButtonWithoutBg(props: ButtonProps) {

    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true)
    }

    function handleMouseLeave() {
        setHovered(false)
    }

    let slashStyles = "";

    if (hovered) {
        slashStyles = styles.hovered;
    }

    return (

        <Link className={[styles.button, slashStyles].join(" ")} to={props.buttonLink} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <div className={[styles.text, slashStyles].join(" ")}>{props.buttonText}</div>
        </Link>

    )
}