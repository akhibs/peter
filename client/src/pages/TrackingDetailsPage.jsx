import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./../css/TrackingDetailsPage.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function TrackingDetailsPage() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.TrackingDetailsPage}>
      <div className={styles.theTrackingDetailsBox}>
        <section className={styles.theTrackingDetailsCover}>
          <h3>Tracking Details</h3>
          <div className={styles.horizontalLine}></div>
          <p>{state[0].trackingNo}</p>
        </section>
      </div>

      <section className={styles.numbers}>
        <div>
          <h4>Tracking Number:</h4>
          <p>{state[0].trackingNo}</p>
        </div>
        <div>
          <h4>Identification Number:</h4>
          <p>{state[0].idNo}</p>
        </div>
        <div>
          <h4>Registration Number:</h4>
          <p>{state[0].regNo}</p>
        </div>
      </section>
      <section className={styles.shipperReciever}>
        <div>
          <h3>Shipper Information</h3>
          <div>
            <p>
              <IoMdPerson className={styles.icon} />{" "}
              {state[0].shipperInfo.company}
            </p>
            <p>
              <FaHouse className={styles.icon} />{" "}
              {state[0].shipperInfo.companyAddress}
            </p>
            <p>
              <MdEmail className={styles.icon} />{" "}
              {state[0].shipperInfo.companyEmail}
            </p>
          </div>
        </div>
        <div>
          <h3>Reciever Information</h3>
          <div>
            <p>
              <IoMdPerson className={styles.icon} />{" "}
              {state[0].recieverInfo.name}
            </p>
            <p>
              <FaHouse className={styles.icon} />{" "}
              {state[0].recieverInfo.address}
            </p>
            <p>
              <MdEmail className={styles.icon} /> {state[0].recieverInfo.email}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.shipmentInfo}>
        <h3>Shipment Information</h3>
        <div>
          <div>
            <h4>Origin</h4>
            <p>{state[0].shipmentInfo.origin}</p>
            <h4>Destination</h4>
            <p>{state[0].shipmentInfo.destinantion}</p>
            <h4></h4>
            <p>{state[0].shipmentInfo.shipmentMode}</p>
          </div>
          <div>
            <h4>Depature Date</h4>
            <p>{state[0].shipmentInfo.depatureDate}</p>
            <h4>Expected Delivery Date</h4>
            <p>{state[0].shipmentInfo.expectedDeliveryDate}</p>
          </div>
          <div>
            <h4>comment</h4>
            <p>{state[0].shipmentInfo.comment}</p>
          </div>
        </div>
      </section>
      <section className={styles.packages}>
        <h3>Packages</h3>
        <table border="1">
          <tr>
            <th>Quantity</th>
            <th>Content</th>
            <th>Weight</th>
          </tr>
          <tr>
            <td>{state[0].packages.quantity}</td>
            <td>{state[0].packages.content}</td>
            <td>{state[0].packages.weight}</td>
          </tr>
        </table>
      </section>
      <section className={styles.shipmentStatus}>
        <p>
          Shipment Status: <span>{state[0].shipmentStatus}</span>
        </p>
      </section>
      <section className={styles.shipmentHistory}>
        <h3>Shipment History</h3>
        <div>
          <div>
            <h4>Origin</h4>
            <p>{state[0].shipmentHistory.origin}</p>

            <h4>Depature Date</h4>
            <p>{state[0].shipmentHistory.depatureDate}</p>
          </div>
          <div>
            <h4>Current Location</h4>
            <p>{state[0].shipmentHistory.currentLocation}</p>
            <h4>Arrival Date</h4>
            <p>{state[0].shipmentHistory.arrivalDate}</p>
          </div>
          <div>
            <h4>Destination</h4>
            <p>{state[0].shipmentHistory.destinantion}</p>
            <h4>Expected Delivery Date</h4>
            <p>{state[0].shipmentHistory.expectedDeliveryDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
