import { useState } from "react";
import Image from "next/image";
// import styles from '../styles/right.module.css'; // Import CSS module
import styles from "../styles/right.module.css"; // Import CSS module
import Center from "./center";
import Center from "./componets/center";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faDashboard, faClock, faTag, faBars, faBookmark, faCalendar, faCheck, faFootball, faSoccerBall, faGamepad, faMusic, faChalkboardTeacher, faTimes } from '@fortawesome/free-solid-svg-icons';

const Rightbar = () => {
  return (
    <>
      <div className={styles.rightcontainer}>
      <Center />
        <h1>
          {" "}
          <Image src="/vector.jpg" alt="logo" width={10} height={100} />
          Sedboi.euy
        </h1>

        <ul className={styles.list}>
          <a href="#">
            <li>
              {" "}
              <Image src="/Group.svg" alt="logo" width={100} height={100} />
              Home
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gr.svg" alt="logo" width={100} height={100} />
              Timeline
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/G9.svg" alt="logo" width={100} height={100} />
              Community
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gt.svg" alt="logo" width={100} height={100} />
              Discovery
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gr.svg" alt="logo" width={100} height={100} />
              Friends
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gk.svg" alt="logo" width={100} height={100} />
              Bookmark
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gp.svg" alt="logo" width={100} height={100} />
              Event
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gpp.svg" alt="logo" width={100} height={100} />
              Discussion
            </li>
          </a>
        </ul>
        <ul className={styles.list1}>
          <h3>Category</h3>
          <a href="#">
            <li>
              {" "}
              <Image src="/G8.svg" alt="logo" width={100} height={100} />
              Sport
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gt.svg" alt="logo" width={100} height={100} />
              Gaming
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gt.svg" alt="logo" width={100} height={100} />
              Music
            </li>
          </a>
          <a href="#">
            <li>
              {" "}
              <Image src="/Gt.svg" alt="logo" width={100} height={100} />
              Tech & Science
            </li>
          </a>
        </ul>
        <Center />
      </div>
    </>
  );
};

export default Rightbar;
