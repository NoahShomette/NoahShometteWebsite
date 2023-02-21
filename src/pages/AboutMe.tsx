import styles from "./AboutMe.module.css";
import photo from "../resources/NoahShometteMainPic.jpeg";
import Spacer from "../components/design/spacers/Spacer";
import {useColors} from "../context/colorsContext";
import ContactMeForm from "../components/ContactMeForm";

function AboutMe() {
    let colors = useColors();

    return (
        <>
            <div className={styles.pageBody}>
                <div className={styles.bioHolder}>
                    <div className={styles.photo}>
                        <img src={photo}
                             alt="Noah Shomette"/>
                    </div>
                    <div className={styles.bio}>
                        <div className={styles.bioTitle}>
                            <h1>Bio</h1>
                        </div>
                        <div className={styles.bioBox}>
                            <div className={styles.spacer}>
                                <Spacer color={colors.activeColor.colorDark} height="3px" width="40%"></Spacer>
                            </div>

                            <div className={styles.bioText}>
                                <p>
                                    I’m a recent college graduate, passionate about technology and learning, currently
                                    looking for a role in software development!
                                </p>
                                <p>
                                    I love getting to make things, whether
                                    thats a game framework for myself and others, 3d printed tools and toys, or websites
                                    and software. Making things is fun and I want to make things for a living!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.skillsContactSections}>
                    <div className={styles.contactSection}>
                        <ContactMeForm></ContactMeForm>
                    </div>
                    <Spacer color={colors.activeColor.colorMainAlt} height="80%" width="3px"></Spacer>
                    <div className={styles.skills}>
                        <div className={styles.skillsHeadline}>
                            <h2>Skills and Proficincies</h2>
                        </div>
                        <div className={styles.skillsBoxesHolder}>
                            <div className={styles.skillBox}>
                                <div className={styles.skillsTitle}>
                                    <h2>Languages</h2>
                                </div>
                                <div className={styles.skillsSpacer}>
                                    <Spacer color={colors.activeColor.colorDark} height="3px" width="80%"></Spacer>
                                </div>
                                <div className={styles.skillsText}>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript / Typescript</p>
                                    <p>Rust</p>
                                    <p>C#</p>
                                </div>
                            </div>
                            <div className={styles.skillBox}>
                                <div className={styles.skillsTitle}>
                                    <h2>Tools</h2>
                                </div>
                                <div className={styles.skillsSpacer}>
                                    <Spacer color={colors.activeColor.colorDark} height="3px" width="80%"></Spacer>
                                </div>
                                <div className={styles.skillsText}>
                                    <p>React</p>
                                    <p>Next JS</p>
                                    <p>Git</p>
                                    <p>Zola</p>
                                    <p>Firebase</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Spacer color={colors.activeColor.colorMainAlt} height="3px" width="90%"></Spacer>

                </div>
            </div>
        </>
    );
}

export default AboutMe;