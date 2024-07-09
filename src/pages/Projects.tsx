import React from "react";
import styles from "./Projects.module.css";
import ProjectsCard from "../components/ProjectsCard";
import ggfPhoto from "../resources/ApplicationFrameHost_Gqgyf9kgle.gif";
import spaceCommanderPhoto from "../resources/spaceCommander.png";
import bulletHell from "../resources/bulletHell2.gif";

function Projects() {
  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.pageIntro}>
          <h1>
            Here’s a small collection of my <span>projects</span>, view my{" "}
            <span>Github</span> for more!
          </h1>
        </div>
        <div className={styles.projects}>
          <div className={styles.card}>
            <ProjectsCard
              projectTitle="Bevy Sparse Tilemap"
              projectDescription="An open source tilemap framework for the Bevy Game Engine designed for extremely large maps"
              photoAlt="Bevy sparse tilemap"
              githubLinks={[
                [
                  "Github",
                  "https://github.com/NoahShomette/bevy_sparse_tilemap",
                ],
              ]}
              bulletPoints={[
                "Generic based design supports any type of map imaginable",
                "Supports maps significantly larger than other tilemap crates. Up to millions of tiles with no performance issues",
              ]}
              utilizes="Rust, ECS, Bevy"
            />
          </div>

          {/* <div className={styles.card}>
            <ProjectsCard
              projectTitle="Bevy GGF"
              projectDescription="An open source framework for making tactics and strategy games in Rust"
              projectPhotoPath={ggfPhoto}
              photoAlt="Bevy GGF grid example"
              githubLinks={[
                ["Github", "https://github.com/NoahShomette/bevy_ggf"],
              ]}
              bulletPoints={[
                "Built using Rust and the Bevy Game engine utilizing an ECS composition based design pattern",
                "Created basic systems to cover essential game features like movement, combat, selection, camera, and more while allowing any of it to be customized or removed as needed",
                "Implemented an Event Driven Architecture for maximum flexibility",
              ]}
              utilizes="Rust, ECS, Github"
            />
          </div> */}
          <div className={styles.card}>
            <ProjectsCard
              projectTitle="Not Another Generic Bullet hell"
              projectDescription="A bullet hell game made in Unity for a bullet hell game jam"
              projectPhotoPath={bulletHell}
              photoAlt="Gif of gameplay"
              websiteLinks={[
                [
                  "https://gizzardwizzard.itch.io/not-another-generic-bullet-hell",
                  "gizzardwizzard.itch.io/not-another-generic-bullet-hell",
                ],
              ]}
              bulletPoints={[
                "Built with Unity, C#, and Aseprite",
                "Implemented post processing to enhance gameplay, style, and drama",
                "Implemented core game features - player movement, shooting, damage, and boss attack patterns",
              ]}
              utilizes="Unity, Perforce, C#, Aseprite"
            />
          </div>
          <div className={styles.card}>
            <ProjectsCard
              projectTitle="Bevy Eventwork Mod Websockets (BEMW)"
              projectDescription="An open source transport for the Bevy Eventwork crate that utilizes websockets to support both WASM and Native applications"
              photoAlt="Bevy Eventwork Mod Websockets"
              githubLinks={[
                [
                  "Bevy_eventwork_mod_websockets",
                  "https://github.com/NoahShomette/bevy_eventwork_mod_websockets",
                ],
                [
                  "Bevy_eventwork",
                  "https://github.com/jamescarterbell/bevy_eventwork",
                ],
              ]}
              bulletPoints={[
                "PR'd networking crate Bevy Eventwork with significant changes to allow BEMW to support WASM",
                "Utilizes Websockets to support both WASM and Native applications communicating back and forth to each other",
              ]}
              utilizes="Rust, Async, Bevy, Websockets"
            />
          </div>
          <div className={styles.card}>
            <ProjectsCard
              projectTitle="Space Commander"
              projectDescription="Space Commander is an arcade survival game where you have to defend your
                             planet from endless waves of invisible invaders."
              projectPhotoPath={spaceCommanderPhoto}
              photoAlt="Space Commander game screenshot"
              websiteLinks={[
                [
                  "noahshomette.itch.io/space-commander.com",
                  "https://noahshomette.itch.io/space-commander",
                ],
              ]}
              githubLinks={[
                [
                  "Github",
                  "https://github.com/NoahShomette/space_commander_game",
                ],
              ]}
              bulletPoints={[
                "Built in Rust using the Bevy game engine in 10 days",
                "Integrated Github actions for automatic builds and deployment to Itch",
              ]}
              utilizes="Rust, ECS, Github"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
