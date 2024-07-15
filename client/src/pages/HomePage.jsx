import React from "react";
import styles from "./../css/HomePage.module.css";
import person1 from "./../assets/person1.png";
import person2 from "./../assets/person2.png";
import person3 from "./../assets/person3.png";
import { FaStar } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.people}>
        <section>
          <img src={person1} />
          <p>
            "These guys are just the coolest logistics company ever! They
            exceptionally handled our complex road freight services."
          </p>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p>Peter Page</p>
        </section>
        <section>
          <img src={person2} />
          <p>
            "These guys are just the coolest logistics company ever! They
            exceptionally handled our complex road freight services."
          </p>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p>Peter Page</p>
        </section>
        <section>
          <img src={person3} />
          <p>
            "These guys are just the coolest logistics company ever! They
            exceptionally handled our complex road freight services."
          </p>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p>Peter Page</p>
        </section>
      </div>
    </div>
  );
}
