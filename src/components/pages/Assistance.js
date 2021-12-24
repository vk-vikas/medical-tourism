import React from "react";
import forms from "./images/Forms.png";
import styles from "./Assistance.module.css";
import emailjs from 'emailjs-com';

function Assistance() {
  
  const HandleSubmit = (e) => {
    
    document.querySelectorAll('input').target.value="";
    e.preventDefault();
    // emailjs.sendForm('service_l0fyhn9','template_jns18j6',e.target,'user_Otxk1ZNu8U1u095uL0LCs')
    // .then(res=>{
    //   console.log(res);
    // }).catch(err=> console.log(err));
  }
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
        <form className={styles.form} onSubmit={HandleSubmit}>
          <label>Name</label>
          <input type="text" name="name" ></input>
          <label>email</label>
          <input type="email" name="user_email" ></input>
          <label>Country</label>
          <input type="text" name="country" ></input>
          <label>City</label>
          <input type="text" name="city" ></input>
          <label>phone number</label>
          <input type="text" name="number"></input>
          <input type="submit" value="send" className={styles.submitbtn}></input>
          {/* <button >Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default Assistance;
