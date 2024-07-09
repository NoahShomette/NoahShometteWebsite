import styles from "./ProjectsCard.module.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ButtonSize } from "../utils/options";
import Button from "./interface/Button";
import React, { ReactNode } from "react";
import { useColors } from "../context/colorsContext";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Spacer from "./design/spacers/Spacer";

interface cardProps {
  projectTitle: String;
  projectDescription: string;
  projectPhotoPath?: string;
  photoAlt: string;
  githubLinks?: [string, string][];
  websiteLinks?: [string, string][];
  bulletPoints?: string[];
  utilizes: string;
}

export default function ProjectsCard(props: cardProps) {
  let colors = useColors();

  function getGithub(index: number) {
    return (
      <>
        {props.githubLinks ? (
          <div className={styles.githubButton}>
            <Button
              buttonText={props.githubLinks.at(index)?.at(0) || ""}
              buttonLink={props.githubLinks.at(index)?.at(1) || ""}
              icon={true}
              iconDefinition={faGithub}
              text={true}
              link={true}
              background={false}
              textSize={ButtonSize.extraSmall}
              iconSize={"1x"}
              textColor={colors.activeColor.colorMainAlt}
              iconColor={colors.activeColor.colorMainAlt}
              textHover={colors.activeColor.colorMainAlt}
              iconHover={colors.activeColor.colorMainAlt}
            />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }

  function getSiteLink(index: number) {
    return (
      <>
        {props.websiteLinks ? (
          <div className={styles.websiteLink}>
            <Button
              buttonText={props.websiteLinks.at(index)?.at(0) || ""}
              buttonLink={props.websiteLinks.at(index)?.at(1) || ""}
              icon={true}
              iconDefinition={faGlobe}
              text={true}
              link={true}
              background={false}
              textSize={ButtonSize.extraSmall}
              iconSize={"sm"}
              textColor={colors.activeColor.colorMainAlt}
              iconColor={colors.activeColor.colorMainAlt}
              textHover={colors.activeColor.colorMainAlt}
              iconHover={colors.activeColor.colorMainAlt}
            />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }

  function getBulletPoints() {
    let content: ReactNode[] = [];
    let i = 0;
    props.bulletPoints?.forEach((bp) => {
      i++;
      content.push(<div key={i}>{bp}</div>);
    });

    return content;
  }
  function getAllWebsites() {
    let content: ReactNode[] = [];
    let i = 0;
    props.websiteLinks?.forEach((bp) => {
      content.push(getSiteLink(i));
      i++;
    });

    return content;
  }
  function getAllGithubs() {
    let content: ReactNode[] = [];
    let i = 0;
    props.githubLinks?.forEach((bp) => {
      content.push(getGithub(i));
      i++;
    });

    return content;
  }

  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.projectTitle}</div>
      <div className={styles.spacer}>
        <Spacer
          color={colors.activeColor.colorContrast}
          height="3px"
          width="70%"
        ></Spacer>
      </div>
      <div className={styles.description}>{props.projectDescription}</div>
      <div className={styles.photo}>
        {props.projectPhotoPath ? (
          <img src={props.projectPhotoPath} alt={props.photoAlt} />
        ) : (
          <div className={styles.noPhotoText}> {props.projectTitle} </div>
        )}
      </div>
      <div className={styles.bulletPoints}>{getBulletPoints()}</div>
      <div className={styles.utilizesHolder}>
        <div className={styles.utilizes}>
          <span>Utilizes:</span> {props.utilizes}
        </div>
      </div>
      <div className={styles.buttonsBackground}>
        <div className={styles.buttons}>
          {getAllGithubs()}
          {getAllWebsites()}
        </div>
      </div>
    </div>
  );
}
