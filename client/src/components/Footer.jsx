import React from "react";
import styles from "./../css/Footer.module.css";
import logo from "./../assets/logo2.png";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerOptionBoxes}>
        <section className={styles.firstOptions}>
          <img src={logo} className={styles.footerLogo} />
          <p>
            Eliteload is a global supplier of transport and
            logistics solutions. We have offices in more than 15 countries and
            an international network of partners and agents.
          </p>
        </section>
        <section className={styles.secondOptions}>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact us</a>
          <a href="/frequently-asked-questions">FAQ</a>
        </section>
        <section className={styles.thirdOptions}>
          <h3>Our Solutions</h3>
          <a href="/air-freight-forwarding">Air Frieght Forwarding</a>

          <a href="/road-freight-forwarding">Road Frieght Forwarding</a>

          <a href="/ocean-freight-forwarding">Ocean Frieght Forwarding</a>

          <a href="/warehouse-and-storage">WareHouse And Storage</a>
        </section>
        <section className={styles.fourthOptions}>
          <h3>Contact us</h3>
          <a href="mailto:someone@example.com">
            <IoMdMail />
            support@someone@example.com
          </a>
        </section>
      </div>
      <div className={styles.allRightsReserved}>All Rights Reserved</div>
    </div>
  );
}
