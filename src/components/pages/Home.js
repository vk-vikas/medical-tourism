import React from "react";
import Form from "./cards/Form";
import Hero from "./cards/Hero";
import Hospitals from "./cards/Hospitals";
import Steps from "./cards/Steps";
import Testimonial from "./cards/Testimonial";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Hero />
      <Hospitals />
      <Steps />

      <Testimonial />
    </div>
  );
}

export default Home;
