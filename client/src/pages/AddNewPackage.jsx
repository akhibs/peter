import React, { useState } from "react";
import styles from "./../css/AddNewPackage.module.css";
import { SpinnerCircular } from "spinners-react";

export default function AddNewPackage() {
  const [errorMsg, setErrorMsg] = useState("");
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
  const [quantity, setQuantity] = useState("");
  const [content, setContent] = useState("");
  const [weight, setWeight] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState("");
  const [currentLocation, setCurrentLocaion] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  function changeInput(e) {
    e.preventDefault();
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
    } else if (e.target.name === "quantity") {
      setQuantity(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    } else if (e.target.name === "weight") {
      setWeight(e.target.value);
    } else if (e.target.name === "shipmentStatus") {
      setShipmentStatus(e.target.value);
    } else if (e.target.name === "currentLocation") {
      setCurrentLocaion(e.target.value);
    } else if (e.target.name === "arrivalDate") {
      setArrivalDate(e.target.value);
    } else if (e.target.name === "userImage") {
      setUserImage(e.target.files[0]);
    }
  }

  async function submitDetails() {
    setIsSubmit(true);
    try {
      const formData = new FormData();
      formData.append("image", userImage);
      formData.append(
        "json",
        JSON.stringify({
          trackingNo,
          idNo,
          regNo,
          company,
          companyDescription,
          companyAddress,
          companyEmail,
          name,
          address,
          email,
          origin,
          destination,
          shipmentMode,
          depatureDate,
          deliveryDate,
          comment,
          quantity,
          content,
          weight,
          shipmentStatus,
          currentLocation,
          arrivalDate,
        }),
      );
      // //"https://eliteload.com.ng/add-details"

      const searchForDetails = await fetch(
        "https://eliteload.com.ng/add-details",
        {
          method: "POST",
          credentials: "same-origin",
          body: formData,
        },
      );

      const response = await searchForDetails.json();
      console.log(response.status);

      if (response.status === "good") {
        setErrorMsg("Added Successfully");
        setTimeout(() => {
          setErrorMsg("");
          setIsSubmit(false);
        }, 3000);

        //=======================
        setTrackingNo("");
        setIdNo("");
        setRegNo("");
        setCompany("");
        setcompanyDescription("");
        setCompanyAddress("");
        setEmail("");
        setName("");
        setAddress("");
        setEmail("");
        setOrigin("");
        setDestination("");
        setShipmentMode("");
        setDepatureDate("");
        setDeliveryDate("");
        setComment("");
        setQuantity("");
        setContent("");
        setWeight("");
        setShipmentStatus("");
        setCurrentLocaion("");
        setArrivalDate("");
        setIsSubmit(false);
        //===================
      } else if (response.status === "no_image") {
        setErrorMsg("please add an image");
        setIsSubmit(false);
      } else if (response.status === "no_body") {
        setErrorMsg("no req body");
        setIsSubmit(false);
      } else if (response.status === "no_write") {
        setErrorMsg("nfile write failed");
        setIsSubmit(false);
      }
    } catch (e) {
      setErrorMsg(e.name, e.message, "no server connection");
      setTimeout(() => {
        setErrorMsg("");
        setIsSubmit(false);
      }, 3000);
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
      <p>Company Description</p>
      <input
        onChange={changeInput}
        name="companyDescription"
        type="text"
        value={companyDescription}
      />
      <p>Company Address</p>
      <input
        onChange={changeInput}
        name="companyAddress"
        type="text"
        value={companyAddress}
      />
      <p>Company Email</p>
      <input
        onChange={changeInput}
        name="companyEmail"
        type="text"
        value={companyEmail}
      />
      <p>Name of Receiver</p>
      <input onChange={changeInput} name="name" type="text" value={name} />
      <p>Address of Receiver</p>
      <input
        onChange={changeInput}
        name="address"
        type="text"
        value={address}
      />
      <p>Email of Receiver</p>
      <input onChange={changeInput} name="email" type="text" value={email} />
      <p>Origin of shipment</p>
      <input onChange={changeInput} name="origin" type="text" value={origin} />
      <p>Destinantion</p>
      <input
        onChange={changeInput}
        name="destination"
        type="text"
        value={destination}
      />
      <p>Shipment Mode </p>
      <input
        onChange={changeInput}
        name="shipmentMode"
        type="text"
        value={shipmentMode}
      />
      <p>Depature Date</p>
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
      <p>Comment</p>
      <input
        onChange={changeInput}
        name="comment"
        type="text"
        value={comment}
      />
      <p>Quantity</p>
      <input
        onChange={changeInput}
        name="quantity"
        type="text"
        value={quantity}
      />
      <p>Content</p>
      <input
        onChange={changeInput}
        name="content"
        type="text"
        value={content}
      />
      <p>Weight</p>
      <input onChange={changeInput} name="weight" type="text" value={weight} />
      <p>Shipment Status</p>
      <input
        onChange={changeInput}
        name="shipmentStatus"
        type="text"
        value={shipmentStatus}
      />
      <p>Current Location</p>
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
      <p>User Image</p>
      <input onChange={changeInput} name="userImage" type="file" />
      {isSubmit ? (
        <SpinnerCircular
          secondaryColor="#ffffff"
          size={50}
          thickness={200}
          color="c41e3a"
        />
      ) : (
        <button onClick={submitDetails}>Add User</button>
      )}
      <p>{errorMsg}</p>
    </div>
  );
}
