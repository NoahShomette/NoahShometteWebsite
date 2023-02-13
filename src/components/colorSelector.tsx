import {useColors} from "../context/colorsContext";
import styles from "./colorSelector.module.css";

export default function ColorSelector() {
    let {colors, changeActiveColor, colorsLoaded} = useColors();


    function getSwatch(index: number) {
        if (colorsLoaded) {

            let color = colors[index];
            // background: ; "#" + color.colorMain
            return (
                <div className={styles.swatchGroup} onClick={() => changeActiveColor(colors[index])}>
                    {color.gradient ? <div
                            style={{background: "linear-gradient(120deg, " + color.colorMain + " 0%, " + color.colorSecondaryGradient + " 100%)"}}
                            className={styles.swatch}></div>
                        : <div style={{backgroundColor: color.colorMain}} className={styles.swatch}></div>
                    }

                    <div style={{backgroundColor: color.colorMainAlt}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorContrast}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorDark}} className={styles.swatch}></div>
                    <div style={{backgroundColor: color.colorLight}} className={styles.swatch}></div>
                </div>
            )
        }
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.navigation}>
                    {colorsLoaded ? <div>Change Color</div> :
                        <div> Not Loaded</div>}
                </div>
                <div className={styles.swatches}>
                    {getSwatch(0)}
                    {getSwatch(1)}
                    {getSwatch(2)}
                    {getSwatch(3)}

                </div>

            </div>

        </>
    )

}