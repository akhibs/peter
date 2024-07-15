import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import styles from "./css/App.module.css";
import { useState } from "react";

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  function onHamburgerClick() {
    setShowHamburgerMenu((x) => !x);
    
  }

  return (
    <div className={styles.App}>
      <p className={styles.emailTo}>
        <a href="mailto:someone@example.com">
          <IoMdMail />
          support@someone@example.com
        </a>
      </p>
      <Header onHamburgerClick={ onHamburgerClick } showHamburgerMenu={ showHamburgerMenu} />

      {showHamburgerMenu ? (
        <div className={styles.hamburgerDropDownMenu}>
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">
            Our Solutuion <IoMdArrowDropdown />
          </a>

          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Tracking</a>
        </div>
      ) : (
        <div className={styles.hamburgerDropDownMenuHidden}>
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">
            Our Solutuion <IoMdArrowDropdown />
          </a>

          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Tracking</a>
        </div>
      )}

      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
