import styles from "./Spacer.module.css";

interface lineProps {
    color: string;
    width: string;
    height: string;
}

export default function Spacer(props: lineProps) {


    return (
        <div className={styles.spacerHolder}>
            <div className={styles.spacer}
                 style={{backgroundColor: props.color, width: props.width, height: props.height}}></div>
        </div>
    )
}