import React from "react";
import styles from "./Treatment.module.css";
import treatment from "./images/treatment.png";
import { Link } from "react-router-dom";

function Treatment() {
  return (
    <div className={styles.container}>
      <div className={styles.imgpart}>
        <img src={treatment} alt="treatment"></img>
      </div>
      <div className={styles.textpart}>
        <div className={styles.pair}>
        <Link exact to="/health_care">
          <button>health care</button>
        </Link>
        <Link exact to="/cosmetic_surgery">
          <button>cosmetic_surgery</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/ivf_treatment">
          <button>ivf_treatment</button>
        </Link>
        <Link exact to="/dental_care">
          <button>dental_care</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/gynaecology">
          <button>gynaecology</button>
        </Link>
        <Link exact to="/health_check_up">
          <button>health_check_up</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/orthopaedic_surgery">
          <button>orthopaedic_surgery</button>
        </Link>
        <Link exact to="/baby_delivery">
          <button>baby_delivery</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/bone_marrow_transplant">
          <button>bone_marrow_transplant</button>
        </Link>
        <Link exact to="/joint_replacemnet_surgery">
          <button>joint_replacemnet_surgery</button>
        </Link>
        </div>
        
        <div className={styles.pair}>
        <Link exact to="/neuro_surgery">
          <button>neuro_surgery</button>
        </Link>
        <Link exact to="/breast_implants">
          <button>breast_implants</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/breast_reduction_surgery">
          <button>breast_reduction_surgery</button>
        </Link>
        <Link exact to="/diabetes_treatment">
          <button>diabetes_treatment</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/ent_care_india">
          <button>ent_care_india</button>
        </Link>
        <Link exact to="/eye_care">
          <button>eye_care</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/fat_grafts_plastic_surgery">
          <button>fat_grafts_plastic_surgery</button>
        </Link>
        <Link exact to="/foot_surgery">
          <button>foot_surgery</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/skin_treatment">
          <button>skin_treatment</button>
        </Link>
        <Link exact to="/hernia_operation">
          <button>hernia_operation</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/kidney_transplant">
          <button>kidney_transplant</button>
        </Link>
        <Link exact to="/liposuction">
          <button>liposuction</button>
        </Link>
        </div>

        <div className={styles.pair}>
        <Link exact to="/liver_transplant">
          <button>liver_transplant</button>
        </Link>
        <Link exact to="/obesity_surgery">
          <button>obesity_surgery</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Treatment;
