import React from "react";
import styles from "./Hero.module.css";
import CtScan from "../images/CtScan.png";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textpart}>
        <h1>Title</h1>
        <p>
          ldsjfhsdhfkjashdfksjfhsdfshkf dsjfalsdfhs dfjasdhfjsdfs
          sddfkjsfjsfhsjfhsaj
        </p>
        <p>
          ldsjfhsdhfkjashdfksjfhsdfshkf dsjfalsdfhs dfjasdhfjsdfs
          sddfkjsfjsfhsjfhsaj
        </p>
        <p>
          ldsjfhsdhfkjashdfksjfhsdfshkf dsjfalsdfhs dfjasdhfjsdfs
          sddfkjsfjsfhsjfhsaj
        </p>
      </div>
      <div className={styles.imgpart}>
        <img src={CtScan} alt="ct"></img>
      </div>
    </div>
  );
}

export default Home;
