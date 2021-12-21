import React from "react";
import forms from "../images/Forms.png";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.imgpart}>
        <img src={forms} alt="ct"></img>
      </div>
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
    </div>
  );
}

export default Form;
