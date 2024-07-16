import React, { useState } from "react";
import styles from "./../css/Header.module.css";
import logo from "./../assets/logo.png";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ onHamburgerClick, showHamburgerMenu }) {
  const [showOurSolution, setShowOurSolution] = useState(false);

  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} />
      <section className={styles.hamBurgerMenu} onClick={onHamburgerClick}>
        {showHamburgerMenu ? <IoMdClose /> : <RxHamburgerMenu />}
      </section>

      <section className={styles.menu}>
        <nav>
          <ul>
            <li>
              <a href={"#"}>Home</a>
            </li>
            <li>
              <a href={"#"}>About</a>
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
              <a href={"#"}>Contact</a>
            </li>
            <li>
              <a href={"/tracking"}>Tracking</a>
            </li>
          </ul>
        </nav>
      </section>

      {showOurSolution ? (
        <div className={styles.dropDownMenu}>
          <a href="#">Air Frieght Forwarding</a>

          <a href="#">Road Frieght Forwarding</a>

          <a href="#">Ocean Frieght Forwarding</a>

          <a href="#">WareJouse And Storage</a>
        </div>
      ) : (
        <div className={styles.dropDownMenuHidden}>
          <a href="#">Air Frieght Forwarding</a>

          <a href="#">Road Frieght Forwarding</a>

          <a href="#">Ocean Frieght Forwarding</a>

          <a href="#">WareJouse And Storage</a>
        </div>
      )}
    </div>
  );
}
