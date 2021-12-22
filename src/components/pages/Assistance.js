import React from "react";
import forms from "./images/Forms.png"
import styles from "./Assistance.module.css";

function Assistance() {
  return (
    <div className={styles.container}>
      <div className={styles.imgpart}>
        <img src={forms} alt="ct"></img>
      </div>
      <div className="descpart">
          <h2>description of form</h2>
          <p>slkjlksjd ksdLSKJDLsdjLB KDJsldjls</p>
          <p>slkjlksjd ksdLSKJDLsdjLB KDJsldjls</p>
          <p>slkjlksjd ksdLSKJDLsdjLB KDJsldjls</p>
          <p>slkjlksjd ksdLSKJDLsdjLB KDJsldjls</p>
      </div>
      <div className={styles.textpart}>
        <div className={styles.form}>
            <label>Name</label>
            <input type="text"></input>
            <label>
                email
            </label>
            <input type="text"></input>
            <label>Country</label>
            <input type="text"></input>
            <label>phone number</label>
            <input type="text"></input>
            <button >Submit</button>
        </div>
      </div>
      
    </div>
  );
}

export default Assistance;
