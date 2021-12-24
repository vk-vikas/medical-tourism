import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Testimonial.module.css";
import pic from "../hospital_images/batra.png";

export default function Testimonial() {
  return (
    <div className={styles.container}>
      <Carousel variant="dark">
        <Carousel.Item>
          <div className={styles.slide}>
          <img src={pic}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales lacus nisl, tristique porttitor libero dictum ac.
              Phasellus accumsan et velit at placerat. Quisque vehicula arcu non
              consequat aliquam. Suspendisse ut tincidunt neque. Curabitur
              dignissim tristique quam nec feugiat.
            </p>
            <p className={styles.readmore}>
              Nulla vel ex ultrices, dictum velit nec, lacinia libero. Maecenas
              suscipit ultricies ex, sed aliquam ex lobortis non. Vestibulum
              volutpat leo id semper viverra. Sed pulvinar faucibus magna, id
              consequat leo finibus et. Nunc ornare convallis justo, in congue
              nisi iaculis a. Praesent eget efficitur nunc, id tristique metus.
              Donec quis consectetur turpis. Aliquam tincidunt, tellus non
              vehicula pharetra, orci sem varius magna, nec egestas lectus
              sapien quis leo. Nullam faucibus, eros ac tincidunt luctus, mi dui
              blandit nisl, in sollicitudin quam erat sit amet diam. Suspendisse
              mattis neque non sapien lacinia consequat. Proin odio ipsum,
              tristique vitae efficitur eu, congue sed eros.
            </p>
            <h1>slide 1</h1>
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.slide}>
          <img src={pic}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales lacus nisl, tristique porttitor libero dictum ac.
              Phasellus accumsan et velit at placerat. Quisque vehicula arcu non
              consequat aliquam. Suspendisse ut tincidunt neque. Curabitur
              dignissim tristique quam nec feugiat.
            </p>
            <p className={styles.readmore}>
              Nulla vel ex ultrices, dictum velit nec, lacinia libero. Maecenas
              suscipit ultricies ex, sed aliquam ex lobortis non. Vestibulum
              volutpat leo id semper viverra. Sed pulvinar faucibus magna, id
              consequat leo finibus et. Nunc ornare convallis justo, in congue
              nisi iaculis a. Praesent eget efficitur nunc, id tristique metus.
              Donec quis consectetur turpis. Aliquam tincidunt, tellus non
              vehicula pharetra, orci sem varius magna, nec egestas lectus
              sapien quis leo. Nullam faucibus, eros ac tincidunt luctus, mi dui
              blandit nisl, in sollicitudin quam erat sit amet diam. Suspendisse
              mattis neque non sapien lacinia consequat. Proin odio ipsum,
              tristique vitae efficitur eu, congue sed eros.
            </p>
            <h1>slide 2</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.slide}>
          <img src={pic}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales lacus nisl, tristique porttitor libero dictum ac.
              Phasellus accumsan et velit at placerat. Quisque vehicula arcu non
              consequat aliquam. Suspendisse ut tincidunt neque. Curabitur
              dignissim tristique quam nec feugiat.
            </p>
            <p className={styles.readmore}>
              Nulla vel ex ultrices, dictum velit nec, lacinia libero. Maecenas
              suscipit ultricies ex, sed aliquam ex lobortis non. Vestibulum
              volutpat leo id semper viverra. Sed pulvinar faucibus magna, id
              consequat leo finibus et. Nunc ornare convallis justo, in congue
              nisi iaculis a. Praesent eget efficitur nunc, id tristique metus.
              Donec quis consectetur turpis. Aliquam tincidunt, tellus non
              vehicula pharetra, orci sem varius magna, nec egestas lectus
              sapien quis leo. Nullam faucibus, eros ac tincidunt luctus, mi dui
              blandit nisl, in sollicitudin quam erat sit amet diam. Suspendisse
              mattis neque non sapien lacinia consequat. Proin odio ipsum,
              tristique vitae efficitur eu, congue sed eros.
            </p>
            <h1>slide 3</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
