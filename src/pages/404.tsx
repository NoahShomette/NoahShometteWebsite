import React from 'react';
import LinkButton from "../components/interface/LinkButton";
import {ButtonSize} from "../utils/options";

function FourOhFour() {
    return (
        <>
            <h1>Page not found</h1>
            <LinkButton buttonLink={"/"} buttonText={"Home"} background={true} textSize={ButtonSize.medium}/>
        </>

    );
}

export default FourOhFour;