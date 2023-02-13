import styles from "./VerticalSpacer.module.css";

export default function VerticalSpacer() {


    return (
        <div className={styles.spacerHolder}>
            <div className={styles.spacer}></div>
        </div>
    )
}