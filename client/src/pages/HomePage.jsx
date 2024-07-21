import React from "react";
import styles from "./../css/HomePage.module.css";
import person1 from "./../assets/person1.png";
import person2 from "./../assets/person2.png";
import person3 from "./../assets/person3.png";
import { FaStar } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoIosCalendar, IoIosPeople } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.coverBox}>
        <div className={styles.cover}>
          <p>Fast . Secured . WorldWide</p>
          <h1>EXPRESS SEEMLESS LOGISTIC SERVICES</h1>
        </div>
      </div>
      <div className={styles.getAQuote}>
        <div className={styles.theBox}>
          <section className={styles.getAQuote1}>
            <h3>Let The Experts Handle Your Logistics</h3>
            <div className={styles.horizontalLine}></div>
            <p>
              The most valuable resource we have is our employees. Their
              relentless pursuit of perfection is what has enabled Top Globe
              Logistics to deliver the premium level of service which it is
              known for.
            </p>
            <button>Get A Quote</button>
          </section>
        </div>

        <section className={styles.getAQuote2}>
          <div className={styles.getAQuoteBox1}>
            <HiOfficeBuilding />
            <p>120+</p>
            <span>Offices World Wide</span>
          </div>
          <div className={styles.getAQuoteBox2}>
            <IoIosPeople />
            <p>15000+</p>
            <span>Employees Worldwide</span>
          </div>
          <div className={styles.getAQuoteBox3}>
            <BiWorld />
            <p>15+</p>
            <span>Countries Covered</span>
          </div>
          <div className={styles.getAQuoteBox4}>
            <IoIosCalendar />
            <p>25+</p>
            <span>Years Of Experience</span>
          </div>
        </section>
      </div>
      <div className={styles.whatClientsSay}>
        <h3>What Our Clients Say About Us</h3>
        <div className={styles.horizontalLine}></div>
      </div>
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
          <p className={styles.names}>Orson Manace</p>
        </section>
        <section>
          <img src={person2} />
          <p>
            "Their performance on our project was extremely successful. As a
            result of this collaboration, the project was built with exceptional
            quality & delivered."
          </p>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className={styles.names}>Larry Goerge</p>
        </section>
        <section>
          <img src={person3} />
          <p>
            "The shipping process with this crew was a pleasurable experience!
            They did all in time and with no safety incidents."
          </p>
          <p className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className={styles.names}>Annie Dorse</p>
        </section>
      </div>
    </div>
  );
}
