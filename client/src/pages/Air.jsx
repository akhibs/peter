import React from "react";
import styles from "./../css/Air.module.css";
import { CiTimer } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaPlane, FaShip, FaTruck, FaWarehouse } from "react-icons/fa";

export default function Air() {
  return (
    <div className={styles.Air}>
      <title>Eliteload|Air Freight Forwarding</title>
      <div className={styles.airBox}>
        <section className={styles.airCover}>
          <h3>AIR FREIGHT FORWARDING</h3>
        </section>
      </div>
      <div className={styles.airBody}>
        <section className={styles.first}>
          <aside>
            <h2>Air Freight Introduction</h2>
            <p>
              Airfreight can reduce the total logistics cost for urgent or
              time-critical logistical challenges. By combining the speed of air
              with the cost savings of other modes, backed by smooth and
              efficient customs and administrative procedures. Customers can
              enjoy the best of both Worlds, reducing inventory and improving
              their own service offer with faster response time at affordable
              cost.
            </p>
          </aside>
          <aside>
            <h2>Global Express Shipping</h2>
            <p>
              On selected high-volume trade lanes, Elitelod
              operates a hub and gateway network, using our own controlled
              capacity through our in-house carrier. By careful selection of
              airports, and by using our own staff, we can ensure services that
              are frequent, cost-effective and highly reliable. We also offer
              airfreight services through our global network of offices. Most of
              our volume is routed through strategic partners with whom we have
              deep and longstanding relationships. This enables us to secure
              capacity, control costs and attain high service levels.
            </p>
          </aside>
          <aside>
            <h2>Security</h2>
            <p>
              Security is our number one priority in airfreight, at
              our own hubs and at all the other facilities we use. All our
              hub/gateway warehouses are TAPA ‘A’ and/or C-TPAT certified. We
              make extensive use of CCTV, and where possible we build our own
              units supported by photographic evidence of seals and ULD numbers.
              Pallets are check weighed at origin and destination. Our robust
              and comprehensive information systems also ensure that security
              authorities are not confronted with unexpected or non-compliant
              consignments.
            </p>
          </aside>
        </section>
        <section className={styles.second}>
          <aside>
            <h2>Our Solutions</h2>
            <a href="/air-freight-forwarding">
              <FaPlane className={styles.icon} />
              Air Frieght Forwarding
            </a>

            <a href="/road-freight-forwarding">
              <FaShip className={styles.icon} />
              Road Frieght Forwarding
            </a>

            <a href="/ocean-freight-forwarding">
              <FaTruck className={styles.icon} />
              Ocean Frieght Forwarding
            </a>

            <a href="/warehouse-and-storage">
              <FaWarehouse className={styles.icon} />
              WareHouse And Storage
            </a>
          </aside>
          <aside>
            <h2>Contact Us</h2>
            <a href="mailto:someone@example.com">
              <IoMdMail className={styles.icon} />
              support@someone@example.com
              <p>
                <CiTimer className={styles.icon} />
                Sat - Thu: 8AM -7PM
              </p>
            </a>
          </aside>
        </section>
      </div>
    </div>
  );
}
