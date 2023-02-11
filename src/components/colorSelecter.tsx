import {useColors} from "../context/colorsContext";

export default function ColorSelecter() {
    let {colors, changeActiveColor, colorsLoaded} = useColors();


    return (
        <>
            {colorsLoaded ? <div onClick={() => changeActiveColor(colors[1])}>Change Color</div> :
                <div> Not Loaded</div>}
        </>
    )

}