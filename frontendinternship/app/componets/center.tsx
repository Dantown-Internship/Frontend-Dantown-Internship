import Image from "next/image"; // Import Image component from Next.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Tablet from './tab';
import styles from "../styles/main.module.css"; // Import CSS module

const Center = () => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.nav}>
          <h2>Hey, Dustin </h2>
          <h6>Welcome back, nice to see you again?</h6>

          <div className={styles.got}>
            <label>
              <span className={styles.button}>
                {/* <FontAwesomeIcon icon={faSearch} className={styles.icon} /> */}
              </span>
              <input type="text" placeholder="Search Here" />
            </label>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.img}>
            <Image src="/G4.svg" alt="logo" width={100} height={100} />
            <h3>Real Wild Cyclist</h3>
            <h6>We are the wildest Cyclist</h6>
          </div>
          <div className={styles.img}>
            <Image src="/G3.svg" alt="logo" width={100} height={100} />
            <h3>Yoga Forces</h3>
            <h6>Welcome to the biggeest</h6>
          </div>
          <div className={styles.img}>
            <Image src="/m6.svg" alt="logo" width={100} height={100} />
            <h3>Skater Boys</h3>
            <h6>The best state of skaters</h6>
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
                <td>Mamong Ironman</td>
                <td>Skater</td>
                <td>2,277</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mamong Ironman</td>
                <td>Skater</td>
                <td>2,277</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mamong Ironman</td>
                <td className="hy">Skater</td>
                <td>2,277</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mamong Ironman</td>
                <td>Skater</td>
                <td>2,277</td>
              </tr>
              {/* Add other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Center;
