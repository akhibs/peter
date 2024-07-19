import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import styles from "./css/App.module.css";
import { Children, useEffect, useState } from "react";
import TrackingPage from "./pages/TrackingPage";
import TrackingDetailsPage from "./pages/TrackingDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AddNewPackage from "./pages/AddNewPackage";
import EditPackage from "./pages/EditPackage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  //https://peter-q6t3.onrender.com/handshake
  //http://127.0.0.1:3000/handshake

  fetch("http://127.0.0.1:3000/handshake");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "tracking",
      element: <TrackingPage />,
    },
    {
      path: "tracking/:id",
      element: <TrackingDetailsPage />,
    },
    {
      path: "admin",
      element: <AdminDashboardPage />,
    },
    {
      path: "admin/add-new-package",
      element: <AddNewPackage />,
    },
    {
      path: "admin/edit-package",
      element: <EditPackage />,
    },
    {
      path: "about-us",
      element: <AboutUsPage />,
    },
    {
      path: "contact-us",
      element: <ContactUsPage />,
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
      <Header
        onHamburgerClick={onHamburgerClick}
        showHamburgerMenu={showHamburgerMenu}
      />

      {showHamburgerMenu ? (
        <div className={styles.hamburgerDropDownMenu}>
          <a href="#">Home</a>

          <a href="/about-us">About</a>

          <a href="#">
            Our Solutuion <IoMdArrowDropdown />
          </a>

          <a href="#">FAQ</a>
          <a href="/contact-us">Contact</a>
          <a href="/tracking">Tracking</a>
        </div>
      ) : (
        <div className={styles.hamburgerDropDownMenuHidden}>
          <a href="#">Home</a>

          <a href="/about-us">About</a>

          <a href="#">
            Our Solutuion <IoMdArrowDropdown />
          </a>

          <a href="#">FAQ</a>
          <a href="/contact-us">Contact</a>
          <a href="/tracking">Traccking</a>
        </div>
      )}

      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
