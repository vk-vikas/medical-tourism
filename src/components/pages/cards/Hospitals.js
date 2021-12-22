import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hospitals.module.css";
import pic from "../images/CtScan.png";

function Hospitals() {
  return (
    <div className={styles.container}>
      <div className={styles.packet}>
      <div className={styles.img}>
        <img src={pic} alt="hospital"></img>
        </div>
      <div className={styles.text}>
        <h1>Hospitals</h1>
        <p>jdfsd sadfjsdfj dsfsa sfjslkfjaslkfjaskljflsakfjslfjs
        sfsalfjlasf sfsfas lksj faslk fasf dkfjs dsfjlk slkjs lkjsfsf</p>
        <Link exact to="/contactus">
          <button>See Hospitals</button>
        </Link>
      </div>
      </div>

      <div className={styles.packet}>
   
    
      <div className={styles.text}>
        <h1>Treatment</h1>
        <p>jdfsd sadfjsdfj dsfsa sfjslkfjaslkfjaskljflsakfjslfjs
        sfsalfjlasf sfsfas lksj faslk fasf</p>
        <Link exact to="/contactus">
          <button>See Hospitals</button>
        </Link>
        
      </div>
      <div className={styles.img}>
        <img src={pic} alt="treatment"></img>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
