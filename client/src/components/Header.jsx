import React, { useState } from "react";
import styles from "./../css/Header.module.css";
import logo from "./../assets/logo.png";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ onHamburgerClick, showHamburgerMenu }) {
  const [showOurSolution, setShowOurSolution] = useState(false);

  return (
    <div className={styles.Header}>
      <a href="/">
        {" "}
        <img className={styles.logo} src={logo} />
      </a>
      <section className={styles.hamBurgerMenu} onClick={onHamburgerClick}>
        {showHamburgerMenu ? <IoMdClose /> : <RxHamburgerMenu />}
      </section>

      <section className={styles.menu}>
        <nav>
          <ul>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/about-us"}>About</a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowOurSolution((x) => !x);
                }}
              >
                Our Solution <IoMdArrowDropdown />
              </a>
            </li>
            <li>
              <a href={"#"}>FAQ</a>
            </li>
            <li>
              <a href={"/contact-us"}>Contact</a>
            </li>
            <li>
              <a href={"/tracking"}>Tracking</a>
            </li>
          </ul>
        </nav>
      </section>

      {showOurSolution ? (
        <div className={styles.dropDownMenu}>
          <a href="/air-freight-forwarding">Air Frieght Forwarding</a>

          <a href="/road-freight-forwarding">Road Frieght Forwarding</a>

          <a href="/ocean-freight-forwarding">Ocean Frieght Forwarding</a>

          <a href="warehouse-and-storage">WareHouse And Storage</a>
        </div>
      ) : (
        <div className={styles.dropDownMenuHidden}>
          <a href="/air-freight-forwarding">Air Frieght Forwarding</a>

          <a href="/road-freight-forwarding">Road Frieght Forwarding</a>

          <a href="/ocean-freight-forwarding">Ocean Frieght Forwarding</a>

          <a href="warehouse-and-storage">WareHouse And Storage</a>
        </div>
      )}
    </div>
  );
}
