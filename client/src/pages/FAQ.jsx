import React, { useState } from "react";
import styles from "./../css/FAQ.module.css";
import clsx from "clsx";
import faq from "./../assets/faq.png";
import { FaPlus } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "WHAT IS LOGISTICS MANAGEMENT?",
      answer:
        "Logistics management is a function where a company, usually consisting of various shipping and distribution professionals provide services to analyze a company’s supply chain, offer carrier and service options, and provide continued management of all or some areas of a customer’s transportation needs.",
    },
    {
      question:
        "DOES IT COST ANYTHING TO DO A FULL ANALYSIS OF OUR SUPPLY CHAIN SERVICE?",
      answer:
        "No, we do not charge for our initial analysis. There is absolutely nothing to lose by having our expert logistics professionals review your shipping and distribution spend and profile. In most cases we are compensated by our providers should you utilize our services.",
    },
    {
      question: "WHAT MODE AND SERVICS DOES ELITELOAD PROVIDE?",
      answer:
        "We offer services for international and domestic freight, LCL shipping, FCL shipping solutions, freight and parcel audit and reporting, and overall supply chain management.",
    },
    {
      question: "I AM A SMALL START-UP, CAN ELITELOAD HELP ME?",
      answer:
        "Yes, we love working with small and emerging companies. EliteLoad provides the expertise and support to help your company scale.",
    },
    {
      question: "WHAT SIZE SHIPMENTS CAN YOU HANDLE?",
      answer:
        "Pretty much any size you have! We can handle individual cartons, palletized items, and large, bulky items up to 20,000 lbs per piece-plus everything in between. Our terminals are equipped for flatrack/flatbed loading and oversized freight. We can accommodate special freight needs by utilizing equipment rentals.",
    },
    {
      question: "HOW DO YOU MEASURE SHIPMENTS?",
      answer:
        "We measure the length, width, and height of the shipment and calculate the cubic feet of space that the shipment takes up in the container.",
    },
    {
      question: "CAN YOU HANDLE HAZARDOUS MATERIALS?",
      answer:
        "Yes. All of our associates have been fully trained and are certified in the handling of hazardous material. We take the handling of hazardous materials very seriously and are completely certified to transport freight of this nature. At this time, we do not handle Class 1 explosives. If you are shipping hazardous materials, you must include a copy of the MSDS with the shipment at the time of delivery. The freight must be properly packaged and labeled to meet all regulations. All hazardous items must be itemized to include:",
    },
    {
      question: "DO YOU OFFER WAREHOUSING SERVICES?",
      answer:
        "Yes! We offer standard storage fees and variable storage fees, (only pay for what you use), but we can negotiate storage costs to fit your budget. Our warehouses are highly secure, equipped with state of the art camera systems and alarms. Our facilities are monitored both on site and remotely. We also offer a full services WMS (warehouse management system).",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.FAQ}>
      <title>Eliteload|FAQs</title>
      <div className={styles.FAQBox}>
        <section className={styles.FAQCover}>
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </section>
      </div>
      <div className={styles.faqBox}>
        <div className={styles.faqBody}>
          <h2>Frequently Asked Questions</h2>
          <p>All you need to know about EliteLoad</p>
          <img src={faq} />
        </div>
        <div className={styles.accordion}>
          {questions.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => handleClick(index)}
                >
                  <p>{item.question}</p> <FaPlus className={styles.icon} />
                </button>
                <div
                  className={clsx(styles.accordionContent, {
                    [styles.active]: activeIndex === index,
                  })}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
