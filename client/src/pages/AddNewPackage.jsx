import React, { useState } from "react";
import styles from "./../css/AddNewPackage.module.css";

export default function AddNewPackage() {
  const [errorMsg, setErrorMsg] = useState("✔ New User Added");
  const [trackingNo, setTrackingNo] = useState("");
  const [idNo, setIdNo] = useState("");
  const [regNo, setRegNo] = useState("");
  const [company, setCompany] = useState("");
  const [companyDescription, setcompanyDescription] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [shipmentMode, setShipmentMode] = useState("");
  const [depatureDate, setDepatureDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [comment, setComment] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState("");
  const [currentLocation, setCurrentLocaion] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  function changeInput(e) {
    if (e.target.name === "trackingNo") {
      setTrackingNo(e.target.value);
    } else if (e.target.name === "idNo") {
      setIdNo(e.target.value);
    } else if (e.target.name === "regNo") {
      setRegNo(e.target.value);
    } else if (e.target.name === "company") {
      setCompany(e.target.value);
    } else if (e.target.name === "companyDescription") {
      setcompanyDescription(e.target.value);
    } else if (e.target.name === "companyAddress") {
      setCompanyAddress(e.target.value);
    } else if (e.target.name === "companyEmail") {
      setCompanyEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "origin") {
      setOrigin(e.target.value);
    } else if (e.target.name === "destination") {
      setDestination(e.target.value);
    } else if (e.target.name === "shipmentMode") {
      setShipmentMode(e.target.value);
    } else if (e.target.name === "depatureDate") {
      setDepatureDate(e.target.value);
    } else if (e.target.name === "deliveryDate") {
      setDeliveryDate(e.target.value);
    } else if (e.target.name === "comment") {
      setComment(e.target.value);
    } else if (e.target.name === "shipmentStatus") {
      setShipmentStatus(e.target.value);
    } else if (e.target.name === "currentLocation") {
      setCurrentLocaion(e.target.value);
    } else if (e.target.name === "arrivalDate") {
      setArrivalDate(e.target.value);
    }
  }
  return (
    <div className={styles.AddNewPackage}>
      <p>Tracking No</p>
      <input
        onChange={changeInput}
        name="trackingNo"
        type="text"
        value={trackingNo}
      />
      <p>Identity No.</p>
      <input onChange={changeInput} name="idNo" type="text" value={idNo} />
      <p>registration No.</p>
      <input onChange={changeInput} name="regNo" type="text" value={regNo} />
      <p>Shipping Company</p>
      <input
        onChange={changeInput}
        name="company"
        type="text"
        value={company}
      />
      <p>company Description</p>
      <input
        onChange={changeInput}
        name="companyDescription"
        type="text"
        value={companyDescription}
      />
      <p>company Address</p>
      <input
        onChange={changeInput}
        name="companyAddress"
        type="text"
        value={companyAddress}
      />
      <p>company Email</p>
      <input
        onChange={changeInput}
        name="companyEmail"
        type="text"
        value={companyEmail}
      />
      <p>name of Reciever</p>
      <input onChange={changeInput} name="name" type="text" value={name} />
      <p>address of reciever</p>
      <input
        onChange={changeInput}
        name="address"
        type="text"
        value={address}
      />
      <p>email of reciever</p>
      <input onChange={changeInput} name="email" type="text" value={email} />
      <p>Origin of shipment</p>
      <input onChange={changeInput} name="origin" type="text" value={origin} />
      <p>destinantion</p>
      <input
        onChange={changeInput}
        name="destination"
        type="text"
        value={destination}
      />
      <p>shipment Mode </p>
      <input
        onChange={changeInput}
        name="shipmentMode"
        type="text"
        value={shipmentMode}
      />
      <p>depature Date</p>
      <input
        onChange={changeInput}
        name="depatureDate"
        type="text"
        value={depatureDate}
      />
      <p>Expected Delivery Date</p>
      <input
        onChange={changeInput}
        name="deliveryDate"
        type="text"
        value={deliveryDate}
      />
      <p>comment</p>
      <input
        onChange={changeInput}
        name="comment"
        type="text"
        value={comment}
      />
      <p>shipment Status</p>
      <input
        onChange={changeInput}
        name="shipmentStatus"
        type="text"
        value={shipmentStatus}
      />
      <p>current Location</p>
      <input
        onChange={changeInput}
        name="currentLocation"
        type="text"
        value={currentLocation}
      />
      <p>Arrival Date</p>
      <input
        onChange={changeInput}
        name="arrivalDate"
        type="text"
        value={arrivalDate}
      />
      <button>Add User</button>
      <span>{errorMsg}</span>
    </div>
  );
}
