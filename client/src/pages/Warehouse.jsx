import React from "react";
import styles from "./../css/Warehouse.module.css";
import { CiTimer } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaPlane, FaShip, FaTruck, FaWarehouse } from "react-icons/fa";

export default function Warehouse() {
  return (
    <div className={styles.Warehouse}>
      <title>Eliteload|Warehouse</title>
      <div className={styles.warehouseBox}>
        <section className={styles.warehouseCover}>
          <h3>WAREHOUSE FREIGHT FORWARDING</h3>
        </section>
      </div>
      <div className={styles.warehouseBody}>
        <section className={styles.first}>
          <aside>
            <h2>Warehousing and Storage Introduction</h2>
            <p>
              As a logistics supply chain director, we are situated at strategic
              inland terminals from where deliveries can be made within 24 hours
              to the most important European consumer concentrations. We offer
              200,000 m2 of centrally located, advanced dedicated or public
              warehouse facilities under customs control. All these warehouse
              facilities meet the most modern requirements relating to health
              and safety, security and AEO, and are spatially flexible. In this
              way, we offer tailor-made solutions for your organisation.
            </p>
          </aside>
          <aside>
            <h2>Knowledge and Facilities</h2>
            <p>
              Eliteload scale enables us to take innovative and decisive action
              to develop and implement the most suitable service portfolio for
              your organization. For this purpose, we have an IT & logistical
              engineering department. Our warehouse processes focus on goods
              intakes, AEO-certified customs services, quality controls, stock
              management, e-commerce order fulfilment and customer-specific
              product management. Data exchange is preferably digital.
            </p>
          </aside>
          <aside>
            <h2>Flexible Labour Pool</h2>
            <p>
              Seasonal influences, rapidly expanding markets and sensitivity to
              economic cycles: your organisation never stands still. For those
              focusing on cost management and quality, the flexible deployment
              of the right staff and equipment is crucial. We position our
              well-trained, qualified and flexible labour pool in those
              positions where they have the greatest benefit for you. Seacon has
              its own large flexible labour pool. We have excellent
              relationships with secondment firms, temporary employment agencies
              and sheltered workshops.
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
            <a href="mailto:eliteload@gmail.com">
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
