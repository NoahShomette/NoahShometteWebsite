import React from 'react';
import styles from "./Projects.module.css"
import ProjectsCard from "../components/ProjectsCard";
import photo from "../resources/NoahShometteMainPic.jpeg";
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
                                      projectDescription="A grid game framework made in Rust using the Bevy game engine"
                                      projectPhotoPath={ggfPhoto} projectTitle="Bevy GGF"
                                      githubLink={"https://github.com/NoahShomette/bevy_ggf"}></ProjectsCard>
                    </div>

                    <div className={styles.card}>
                        <ProjectsCard photoAlt="Foslore Logo"
                                      projectDescription="An open source collaborative lore repository utilizing Github 
                                      and a static site generator"
                                      projectPhotoPath={photo} projectTitle="Foslore"
                                      websiteName={"www.foslore.com"}
                                      websiteLink={"https://www.foslore.com"}
                                      githubLink={"https://github.com/NoahShomette/FOSLore"}></ProjectsCard>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Projects;