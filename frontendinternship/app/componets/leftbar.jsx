// import { useState } from "react";
// import Image from 'next/image';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCircle } from '@fortawesome/free-solid-svg-icons';
// // import Chat from "./chat";
// import styles from "../styles/liftbar.module.css";

// const Liftbar = () => {
//   // const [isShaking, setIsShaking] = useState(false);

//   // const handleClick = () => {
//   //   setIsShaking(true);
//   // }

//   // setTimeout(() => {
//   //   setIsShaking(false);
//   // }, 1000);

//   return (
//     <>
//       <div className="liftcontainer">
//         <div className="icons">
//           <Image src="/m3.svg" alt="logos" width={50} height={50} />
//           <Image src="/m1.svg" alt="logos" width={50} height={50} />
//           <div className="hut">
//             <Image src="/img.png" className="hit" alt="logos" width={100} height={100} />
//             <h6> Supremacy</h6>
//             <Image src="/Vectora.svg" className="hit1" alt="logos" width={50} height={50} />
//           </div>
//         </div>
//         <div className="pop">
//           <div className="ch">
//             <h4>chats</h4>
//             <h5>14</h5>
//           </div>
//           <div className="d">
//             {/* <FontAwesomeIcon icon={faCircle} className="icon" /><h4>Ironmen<h6>When will the play be held? </h6></h4> */}
//           </div><br />
//           <div className="a">
//             {/* <FontAwesomeIcon icon={faCircle} className="icon" /> */}
//             <h4>Araina Grande<h6>Alright then see you there</h6></h4>
//           </div><br />
//           <div className="b">
//             {/* <FontAwesomeIcon icon={faCircle} className="icon" /> */}
//             <h4>Araina Grande<h6>Come and join to my party </h6></h4>
//           </div><br />
//           <div className="c">
//             {/* <FontAwesomeIcon icon={faCircle} className="icon" /> */}
//             <h4>Araina Grande<h6>After that you can see me </h6></h4>
//           </div>
//         </div>
//         {/* <Chat /> */}
//       </div>
//     </>
//   );
// };

// export default Liftbar;
import { useState, useEffect } from "react";
import Image from 'next/image';
import Center from "./center";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faM, faCircle } from '@fortawesome/free-solid-svg-icons';
// import Chat from "./chat";
// import m1 from '../public/m1.svg';
// import m3 from '../public/m3.svg';
// import img from '../public/img.png';
// import vectora from '../public/Vectora.svg';
// import styles from './lift.module.css'; // Import your CSS file
import styles from "../styles/liftbar.module.css";
const Liftbar = () => {
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShaking(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [isShaking]);

    const handleClick = () => {
        setIsShaking(true);
    };

    return (
        <div className = {styles.general}>
        <div className={styles.liftcontainer}>
           {/* <Center /> */}
            <div className={styles.icons}>
                <Image src="/m3.svg" alt="logo" width={10} height={100} />
                <Image src="/m1.svg" alt="logo" width={10} height={100} />
                <div className={styles.hut}>
                <Image src="/img.png" alt="logo" width={10} height={100} />
                    <h6>Supremacy</h6>
                    <Image src="/vectora.svg" alt="logo" width={10} height={100} />
                </div>
            </div>
            <div className={styles.pop}>
                {/* Chat section */}
                <div className="ch">
            <h4>chats</h4>
            <h5>14</h5>
            </div>
            <div className="d">
        {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
        <h4>Ironmen<h6>When will the play be held? </h6></h4>
        </div><br></br>
        <div className="a">
        {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
        <h4>Araina Grande<h6>Alrigth then see you there</h6></h4>
        </div><br></br>
        <div className="b">
        {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
        <h4>Araina Grande<h6>Come and join to my party </h6></h4>
        </div><br></br>
        <div className="c">
        {/* <FontAwesomeIcon icon={faCircle} className="icon"/> */}
        <h4>Araina Grande<h6>After that you can see me </h6></h4>
  </div>
            </div>
            
            {/* <Chat /> */}
        </div>
        </div>
    );
};

export default Liftbar;
