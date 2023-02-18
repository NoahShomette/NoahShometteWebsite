import React from 'react';
import styles from "./Projects.module.css"
import ProjectsCard from "../components/ProjectsCard";
import foslorePhoto from "../resources/chrome_kyQ9DFYpZv.png";
import ggfPhoto from "../resources/ApplicationFrameHost_Gqgyf9kgle.gif";
import spaceCommanderPhoto from "../resources/spaceCommander.png";

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
                        <ProjectsCard
                            projectTitle="Bevy GGF"
                            projectDescription="An open source framework for making tactics and strategy games in Rust"
                            projectPhotoPath={ggfPhoto}
                            photoAlt="Bevy GGF grid example"
                            githubLink={"https://github.com/NoahShomette/bevy_ggf"}
                            bulletPoints={["Built using Rust and the Bevy Game engine",
                                "Provides systems to cover basic game features like movement, combat, selection, camera, and more while allowing any of it to be customized or removed as needed"]}
                            utilizes="Rust, ECS, Github"
                        />
                    </div>

                    <div className={styles.card}>
                        <ProjectsCard
                            projectTitle="Foslore"
                            projectDescription="An open source collaborative lore repository utilizing Github 
                                      and a static site generator"
                            projectPhotoPath={foslorePhoto}
                            photoAlt="Foslore Logo"
                            websiteName={"foslore.com"}
                            websiteLink={"https://www.foslore.com"}
                            githubLink={"https://github.com/NoahShomette/FOSLore"}
                            bulletPoints={["Built with basic HTML and SCSS and integrated with Github to enable automatic builds and CI/CD",
                                "Built a variety of components to enable feature rich articles and content",
                                "Created rules, contribution pipelines, tutorials, and more to facilitate anyone contributing their stories"]}
                            utilizes="HTML, SCSS, Javascript, Static Site Generator, Github"
                        />
                    </div>
                    <div className={styles.card}>
                        <ProjectsCard
                            projectTitle="Space Commander"
                            projectDescription="Space Commander is an arcade survival game where you have to defend your
                             planet from endless waves of invisible invaders."
                            projectPhotoPath={spaceCommanderPhoto}
                            photoAlt="Space Commander game screenshot"
                            websiteName={"noahshomette.itch.io/space-commander.com"}
                            websiteLink={"https://noahshomette.itch.io/space-commander"}
                            githubLink={"https://github.com/NoahShomette/space_commander_game"}
                            bulletPoints={["Built in Rust using the Bevy game engine in 10 days"]}
                            utilizes="Rust, ECS, Github"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;