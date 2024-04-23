import Image from "next/image";
import Chat from "./chatbox";
import styles from "../styles/liftbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

const Liftbar = () => {
  return (
    <>
    
      <div className={styles.general}>
        <div className={styles.liftcontainer}>
          <div className={styles.icons}>
            <Image src="/images/m3.svg" alt="logo" width={10} height={100} />
            <Image src="/images/m1.svg" alt="logo" width={10} height={100} />
            <div className={styles.hut}>
              <Image src="/images/img.png" alt="logo" width={10} height={100} />
              <h6>Supremacy</h6>
              <Image src="/images/vectora.svg" alt="logo" width={10} height={100} />
            </div>
          </div>
          <div className={styles.pop}>
            {/* Chat section */}
            <div className={styles.ch}>
              <h4>chats</h4>
              <h5>14</h5>
            </div>
            <div className="d">
              <h4>Ironmen</h4>
              <h6>When will the play be held? </h6>
            </div>
            <br />
            <div className="a">
              {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
              <h4>Araina Grande</h4>
              <h6>Alrigth then see you there</h6>
            </div>
            <br></br>
            <div className="b">
              {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
              <h4>Araina Grande</h4>
              <h6>Come and join to my party </h6>
            </div>
            <br></br>
            <div className="c">
              {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
              {/* <Image src="/Group 131.svg" alt="logo" width={10} height={10} /> */}
              <h4>Araina Grande</h4>
              <h6>After that you can see me </h6>
            </div>
          </div>

          {/* <Chat /> */}
        </div>
        <Chat />
      </div>
    </>
  );
};

export default Liftbar;
