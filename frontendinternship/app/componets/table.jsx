import Image from "next/image"; // Import Image component from Next.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Tablet from './tab';
import styles from "../styles/main.module.css"; // Import CSS module

const Center = () => {
  return (
    <>
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
      
    </>
  );
};

export default Center;
