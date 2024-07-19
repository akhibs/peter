import React from "react";
import styles from "./../css/ContactUsPage.module.css";
import { CiTimer } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className={styles.ContactUsPage}>
      <div className={styles.theContactUsBox}>
        <section className={styles.theContactUsCover}>
          <h3>CONTACT US</h3>
        </section>
      </div>
      <div className={styles.contactBox}>
        <section className={styles.first}>
          <h2>Feel free to leave a message</h2>
          <p>
            If you have any questions about what we offer for consumers or for
            business, you can always email uss via the below details. We'll
            reply within 24 hours.
          </p>
          <a href="mailto:someone@example.com">
            <IoMdMail className={styles.icon} />
            support@someone@example.com
            <p>
              <CiTimer className={styles.icon} />
              Sat - Thu: 8AM -7PM
            </p>
          </a>
        </section>
        <section className={styles.second}>
          <input placeholder="Nane" className={styles.name} type="text" />
          <input placeholder="Email" className={styles.email} type="text" />
          <input
            placeholder="Message"
            className={styles.textarea}
            type="text"
          />
          <button>
            Send Message <FaTelegramPlane />
          </button>
        </section>
      </div>
    </div>
  );
}
