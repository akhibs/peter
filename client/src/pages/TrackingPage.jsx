import React, { useState } from "react";
import styles from "./../css/TrackingPage.module.css";
import { TbWorldSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

export default function TrackingPage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  function searchBarInput(e) {
    setSearchBarValue(e.target.value);
  }

  async function searchForGoods() {
    setIsSubmit(true);
    try {
      // "https://eliteload.com.ng/id-search";
      const searchForDetails = await fetch("http://127.0.0.1:3001/id-search", {
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

      if (response.foundData.length === 0) {
        setErrorStatus(" Invalid Tracking Details. Does not exist");
        setTimeout(() => {
          setErrorStatus("");
          setIsSubmit(false);
        }, 3000);
      } else {
        // https://eliteload.com.ng/image/${searchBarValue}
        const imageFetch = await fetch(
          `https://eliteload.com.ng/image/${searchBarValue}`,
        );
        const blob = await imageFetch.blob();
        const imageUrl = URL.createObjectURL(blob);

        navigate(`${searchBarValue}`, {
          state: { a: response.foundData, b: imageUrl },
        });
      }
    } catch (e) {
      setErrorStatus("error in connection. please try again in 10 secs");
      setTimeout(() => {
        setErrorStatus("");
        setIsSubmit(false);
      }, 3000);
    }
  }

  return (
    <div className={styles.TrackingPage}>
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

        {isSubmit ? (
          <SpinnerCircular
            size={30}
            thickness={200}
            secondaryColor="#ffffff"
            color="c41e3a"
          />
        ) : (
          <TbWorldSearch
            className={styles.searchIcon}
            onClick={searchForGoods}
          />
        )}
      </div>
      <p className={styles.errorMsg}>{errorStatus}</p>
    </div>
  );
}
