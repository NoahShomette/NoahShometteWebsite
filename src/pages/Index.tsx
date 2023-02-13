import React, {useEffect, useState} from 'react';
import styles from "./Index.module.css";
import photo from "../resources/NoahShometteMainPic.jpeg";
import LinkButton from "../components/interface/LinkButton";
import Button from "../components/interface/Button";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {ButtonSize} from "../utils/options";

function Index() {
    /* mobile button stuff - just saving for now
    const [mQuery, setMQuery] = useState({matches: window.innerWidth > 1200});
    
    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 1200px)");
        mediaQuery.addEventListener("change", setMQuery);

        return () => mediaQuery.removeEventListener("change", setMQuery);
    }, []);
    
    let showButtons: boolean;
    showButtons = !mQuery.matches;
        
        // this stuff goes in the return jsx
               {showButtons? <div className={styles.mobileButtons}>
                <LinkButton buttonLink={"/skills"} buttonText={"Skills"} background={true}
                            textSize={ButtonSize.extraLarge}/>
                <LinkButton buttonLink={"/projects"} buttonText={"Projects"} background={true}
                            textSize={ButtonSize.extraLarge}/>
                <Button buttonText={"Github"} buttonLink={"https://github.com/NoahShomette"} icon={true}
                        iconDefinition={faUpRightFromSquare} text={true} link={true} background={true}
                        textSize={ButtonSize.extraLarge} iconSize={"sm"}/>
            </div> : <div/>}
     */

    return (
        <div className={styles.pageBody}>
            <div className={styles.intro}>
                <div className={styles.decoration}>
                    <div className={styles.hi}>Hi!</div>
                    <div className={styles.photo}>
                        <img src={photo}
                             alt="Noah Shomette"/>
                    </div>

                </div>
                <div className={styles.header}>
                    <h1>I’m <span>Noah Shomette</span>, a web developer and indie game dev!</h1>
                </div>
            </div>
            <div className={styles.subline}>
                <p>I have experience
                    in <span>web</span>, <span>game development</span>, <span>open source software</span>,
                    and <span>more</span>!</p>
            </div>
        </div>

    );
}

export default Index;