import React from "react";
import styles from "./../css/Ocean.module.css";
import { CiTimer } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaPlane, FaShip, FaTruck, FaWarehouse } from "react-icons/fa";

export default function Ocean() {
  return (
    <div className={styles.Ocean}>
      <div className={styles.oceanBox}>
        <section className={styles.oceanCover}>
          <h3>OCEAN FREIGHT FORWARDING</h3>
        </section>
      </div>
      <div className={styles.oceanBody}>
        <section className={styles.first}>
          <aside>
            <h2>OCEAN Freight Introduction</h2>
            <p>
              Accurate Express Link is uniquely positioned for offering a
              complete and competitive FCL and LCL product. Accurate Express
              Link’ LCL services range from the coordination of single LCL
              shipments all the way to multi-country consolidation. All LCL
              cargo is consolidated into FCL loads at one of our hubs and then
              shipped to destination, thus realising significant savings in
              transportation, administration, and handling costs and reducing
              transit times. Transportation can even be made easier by adding
              valueadded services such as to-door trucking and customs
              brokerage.
            </p>
          </aside>
          <aside>
            <h2>Global Express Shipping</h2>
            <p>
              On selected high-volume trade lanes, Accurate Express Link
              operates a hub and gateway network, using our own controlled
              capacity through our in-house carrier. By careful selection of
              airports, and by using our own staff, we can ensure services that
              are frequent, cost-effective and highly reliable. We also offers
              airfreight services through our global network of offices. Most of
              our volume is routed through strategic partners with whom we have
              deep and longstanding relationships. This enables us to secure
              capacity, control costs and attain high service levels.
            </p>
          </aside>
          <aside>
            <h2>Security</h2>
            <p>
              Security is of course our number one priority in airfreight, at
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
