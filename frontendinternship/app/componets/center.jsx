import Image from "next/image"; // Import Image component from Next.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Tablet from './tab';
import styles from "../styles/main.module.css"; // Import CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

const Center = () => {
  return (
    <>
    <div className="flex-shrink-0 w-3/4 md:w-1/3 lg:w-1/4 xl:w-4/5">
      <div className={styles.maincontainer}>
        <div className={styles.nav}>
          <div className={styles.headerline}>
          <h2>Hey, Dustin </h2>
          <h6>Welcome back, nice to see you again?</h6>
          </div>
          <div className={styles.search}>
              <FontAwesomeIcon
        icon={faMagnifyingGlass}
      /><input type="text" placeholder="Search Here" />
      </div>
          <div className={styles.got}>
            <label>
              <span className={styles.button}>
                {/* <FontAwesomeIcon icon={faSearch} className={styles.icon} /> */}
        
              </span>
           
            </label>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.img}>
            <Image src="/images/G4.svg" alt="logo" width={100} height={100} />
            <div className={styles.header}>
            <p>Real Wild Cyclist</p>
            <h6>We are the wildest Cyclist</h6>
            </div>
          </div>
          <div className={styles.img}>
            <Image src="/images/G3.svg" alt="logo" width={100} height={100} />
            <div className={styles.header}>
            <p>Yoga Forces</p>
            <h6>Welcome to the biggeest</h6>
            </div>
          </div>
          <div className={styles.img}>
            <Image src="/images/m6.svg" alt="logo" width={100} height={100} />
            <div className={styles.header}>
            <p>Skater Boys</p>
            <h6>The best state of skaters</h6>
            </div>
          </div>

          {/* Add similar Image components for other images */}
        </div>

        <div className={styles.footer}>
          <h4>Friends Rank</h4>
          <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Names</th>
            <th>Category</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className={styles.mam}>
              <div className={styles.mam}>
                Mamong Ironman
                <Image src="/images/Group 131.svg" alt="logo" width={10} height={10} />
              </div>
            </td>
            <td>Skater</td>
            <td>2,277</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Adriana Grande</td>
            <td>Cyclist</td>
            <td>1,814</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Trent Alexander Arnold</td>
            <td>Skater</td>
            <td>1,620</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Shakira Wakawaka</td>
            <td>Yogas</td>
            <td>1,280</td>
          </tr>
          {/* Add other rows */}
        </tbody>
      </table>
    </div>
      </div>
      </div>
    
    </>
  );
};

export default Center;
