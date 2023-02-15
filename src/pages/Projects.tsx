import React from 'react';
import styles from "./Projects.module.css"
import ProjectsCard from "../components/ProjectsCard";
import foslorePhoto from "../resources/chrome_kyQ9DFYpZv.png";
import ggfPhoto from "../resources/ApplicationFrameHost_Gqgyf9kgle.gif";

function Projects() {


    return (
        <>
            <div className={styles.pageBody}>
                <div className={styles.pageIntro}>
                    <h1>Here’s a small collection of my <span>projects</span>, view my <span>Github</span> for more!
                    </h1>
                </div>
                <div className={styles.projects}>

                    <div className={styles.card}>
                        <ProjectsCard photoAlt="Bevy GGF grid example"
                                      projectDescription="An easy to use and adaptable framework for making games in the style 
                                      of Advance Wars, with highly customizable features and control to allow using it for any games"
                                      projectPhotoPath={ggfPhoto} projectTitle="Bevy GGF"
                                      githubLink={"https://github.com/NoahShomette/bevy_ggf"}
                                      bulletPointOne="Built using Rust and the Bevy Game engine"
                                      bulletPointTwo="Provides systems to cover basic game features like movement, combat,
                                       selection, camera, and more while allowing any of it to be customized or removed as needed"
                                      bulletPointThree=""
                        />
                    </div>

                    <div className={styles.card}>
                        <ProjectsCard photoAlt="Foslore Logo"
                                      projectDescription="An open source collaborative lore repository utilizing Github 
                                      and a static site generator"
                                      projectPhotoPath={foslorePhoto} projectTitle="Foslore"
                                      websiteName={"www.foslore.com"}
                                      websiteLink={"https://www.foslore.com"}
                                      githubLink={"https://github.com/NoahShomette/FOSLore"}
                                      bulletPointOne="Built with basic HTML and CSS and integrated
                                       with Github to enable automatic builds and CI/CD"
                                      bulletPointTwo="Built a variety of components to enable feature rich articles and content"
                                      bulletPointThree="Created rules, contribution pipelines, tutorials, and more to facilitate 
                                      anyone contributing their stories"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;