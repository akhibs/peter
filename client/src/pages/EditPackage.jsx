import React, { useState } from "react";
import styles from "./../css/EditPackage.module.css";
import { SpinnerCircular } from "spinners-react";

export default function EditPackage() {
  const [errorMsg, setErrorMsg] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState("");
  const [currentLocation, setCurrentLocaion] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function changeInput(e) {
    if (e.target.name === "trackingNo") {
      setTrackingNo(e.target.value);
    } else if (e.target.name === "shipmentStatus") {
      setShipmentStatus(e.target.value);
    } else if (e.target.name === "currentLocation") {
      setCurrentLocaion(e.target.value);
    }
  }

  async function submitDetails() {
    //https://peter-q6t3.onrender.com/edit-package
    //http://127.0.0.1:80/edit-package
    //http://192.168.0.129:80/edit-package
    setIsSubmit(true);
    try {
      const searchForDetails = await fetch(
        "https://eliteload.com.ng/edit-details",
        {
          method: "POST",
          mode: "cors",
          cache: "default",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Accept: "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            trackingNo,
            shipmentStatus,
            currentLocation,
          }),
        }
      );

      const response = await searchForDetails.json();

      if (response.status === "good") {
        setErrorMsg("Updatted Successfully");
        setTimeout(() => {
          setErrorMsg("");
          setIsSubmit(false);
        }, 3000);

        //=======================
        setTrackingNo("");
        setShipmentStatus("");
        setCurrentLocaion("");
        //===================
      } else if (response.status === "notFound") {
        setErrorMsg("Tracking number does not exist");
        setTimeout(() => {
          setErrorMsg("");
          setIsSubmit(false);
        }, 3000);
      }
    } catch (e) {
      setErrorMsg("An Error Occured Please try again");
      setTimeout(() => {
        setErrorMsg("");
        setIsSubmit(false);
      }, 3000);
    }
  }

  return (
    <div className={styles.AddNewPackage}>
      <p>Tracking No of User</p>
      <input
        onChange={changeInput}
        name="trackingNo"
        type="text"
        value={trackingNo}
      />
      <p>New shipment Status</p>
      <input
        onChange={changeInput}
        name="shipmentStatus"
        type="text"
        value={shipmentStatus}
      />
      <p>New current Location</p>
      <input
        onChange={changeInput}
        name="currentLocation"
        type="text"
        value={currentLocation}
      />
      {isSubmit ? (
        <SpinnerCircular
          size={30}
          thickness={200}
          secondaryColor="#ffffff"
          color="c41e3a"
        />
      ) : (
        <button onClick={submitDetails}>Update PAckage</button>
      )}
      <p>{errorMsg}</p>
    </div>
  );
}
