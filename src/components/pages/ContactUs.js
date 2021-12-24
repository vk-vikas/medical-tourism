import React from "react";
import styles from "./Contactus.module.css";
import contactus from "./images/contactus.png";
import call from "./images/call.png";
import whatsapp from "./images/whatsapp.png";

function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.imgpart}>
        <img src={contactus} alt="contact-img"></img>
      </div>
      <div className={styles.textpart}>
        <h1>Contact Us</h1>
        <p>
          Click the whatsapp icon to chat with us or the phone icon to call us{" "}
        </p>
        <div className={styles.links}>
          <a href="https://wa.me/917764911419" target="_blank">
            <img src={whatsapp} alt="whatsapp"></img>
          </a>
          <a href="tel:917764911419">
            <img src={call} alt="call"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
