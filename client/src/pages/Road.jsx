import React from "react";
import styles from "./../css/Road.module.css";
import { CiTimer } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlane, FaShip, FaTruck, FaWarehouse } from "react-icons/fa";

export default function Road() {
  return (
    <div className={styles.Road}>
      <div className={styles.roadBox}>
        <section className={styles.roadCover}>
          <h3>ROAD FREIGHT FORWARDING</h3>
        </section>
      </div>
      <div className={styles.roadBody}>
        <section className={styles.first}>
          <aside>
            <h2>RoadFreight Introduction</h2>
            <p>
              When goods have to be delivered to your customer’s door, road
              freight is still indispensable. And will remain so in future. In
              recent years, Accurate Express Link Shipment has expanded the
              options for European distribution by road freight by adding dozens
              of lanes. We make up our own daily schedules for packed product
              lines. This applies both to full and part truck loads.
            </p>
          </aside>
          <aside>
            <h2>Transport Solutions</h2>
            <p>
              Accurate Express Link Shipment is the number one logistics supply
              chain director with a maritime character. In addition to overseas
              import, export and warehousing activities, we also handle the
              distribution of your goods to and from any destination in the
              World. For more than 20 years, our business locations situated at
              inland road, rail and water terminals have been the foundation of
              our operations. Our logistics services would not be complete
              without a rapid and efficient transport service that is perfectly
              in line with these terminals and which allows us to deliver goods
              right to your customer’s door.
            </p>
            <div>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Logistic services
              </p>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Door to door delivery
              </p>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Reliable services
              </p>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Careful Handling of Valuable Goods
              </p>
            </div>
          </aside>
          <aside>
            <h2>Quality and Reliability</h2>
            <p>
              Your business needs the right goods in the right place at the
              right time. In other words: delivery reliability. That’s why our
              efforts are registered in KPIs. Thanks to our modern tracking &
              tracing systems, we measure and evaluate these indicators per
              shipment. Our modern information techniques allow us to analyze
              your shipment precisely. Our logistics engineers use this
              information to:
            </p>
            <div>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Check the order intake processing.
              </p>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Measure and evaluate KPIs continually.
              </p>
              <p>
                <MdKeyboardArrowRight className={styles.icon} />
                Optimise your logistics process proactively
              </p>
            </div>
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
