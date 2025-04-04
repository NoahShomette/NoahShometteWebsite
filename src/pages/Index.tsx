import styles from "./Index.module.css";
import photo from "../resources/NoahShometteMainPic.jpeg";
import ContactMeForm from "../components/ContactMeForm";
import Spacer from "../components/design/spacers/Spacer";
import { useColors } from "../context/colorsContext";

function Index() {
  let colorContext = useColors();

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
            <img src={photo} alt="Noah Shomette" />
          </div>
        </div>
        <div className={styles.header}>
          <h1>
            I’m <span>Noah Shomette</span>, a web developer and indie game dev
            <span>.</span>
          </h1>
        </div>
      </div>
      <div className={styles.subInfo}>
        <div className={styles.subline}>
          <h2>
            <span>Some things I'm proud of: </span>
          </h2>
          <div className={styles.spacer}>
            {" "}
            <Spacer
              color={colorContext.activeColor.colorMainAlt}
              height="3px"
              width="90%"
            ></Spacer>
          </div>

          <div>
            <ul>
              <li>
                Full time <span>Web Developer.</span>
              </li>
              <li>
                Certified <span>Nationally Registered EMT.</span>
              </li>
              <li>
                Graduated College with a degree in{" "}
                <span>Criminal Justice.</span>
              </li>
              <li>
                Open source developer<span>.</span>
              </li>
              <li>
                Indie game developer<span>.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactSection}>
          <ContactMeForm></ContactMeForm>
        </div>
      </div>
    </div>
  );
}

export default Index;
