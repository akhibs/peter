import React, { useState } from "react";
import styles from "./../css/TrackingPage.module.css";
import { TbWorldSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function TrackingPage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const navigate = useNavigate();

  function searchBarInput(e) {
    setSearchBarValue(e.target.value);
  }

  async function searchForGoods() {
    try {
      const searchForDetails = await fetch("http://127.0.0.1:3000/id-search", {
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
          searchBarValue,
        }),
      });

      const response = await searchForDetails.json();

      if (response.foundData[0] === null) {
        setErrorStatus(" Invalid Tracking Details. Does not exist");
        setTimeout(() => {
          setErrorStatus("");
        }, 3000);
      } else {
        navigate(`${searchBarValue}`, { state: response.foundData });
      }
    } catch (e) {
      setErrorStatus(" error in connection. try agin in 10sec");
      setTimeout(() => {
        setErrorStatus("");
      }, 3000);
    }

  
  }

  return (
    <div className={TrackingPage}>
      <div className={styles.theTrackingBox}>
        <section className={styles.theTrackingCover}>
          <h3>Track Your Goods</h3>
          <div className={styles.horizontalLine}></div>
          <p>Enter Your Tracking number Below to track goods</p>
        </section>
      </div>
      <p className={styles.errorMsg}>{errorStatus}</p>
      <div className={styles.searchBarBox}>
        <input
          className={styles.searchBar}
          type="text"
          value={searchBarValue}
          onChange={searchBarInput}
        />

        <TbWorldSearch className={styles.searchIcon} onClick={searchForGoods} />
      </div>
      <p className={styles.errorMsg}>{errorStatus}</p>
    </div>
  );
}
