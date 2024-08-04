import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import styles from "./css/App.module.css";
import { memo, useCallback, useEffect, useState } from "react";
import TrackingPage from "./pages/TrackingPage";
import TrackingDetailsPage from "./pages/TrackingDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AddNewPackage from "./pages/AddNewPackage";
import EditPackage from "./pages/EditPackage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Air from "./pages/Air";
import Road from "./pages/Road";
import Ocean from "./pages/Ocean";
import Warehouse from "./pages/Warehouse";
import OurSolution from "./components/OurSolution";
import FAQ from "./pages/FAQ";

const App = memo(() => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [ourSolution, setOurSolution] = useState(true);

  //https://peter-q6t3.onrender.com/handshake
  //http://127.0.0.1:3000/handshake

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
      path: "apsod2if4ugyh2tjr4005kelwq",
      element: <AdminDashboardPage />,
    },
    {
      path: "apsod2if4ugyh2tjr4005kelwq/add-new-package",
      element: <AddNewPackage />,
    },
    {
      path: "apsod2if4ugyh2tjr4005kelwq/edit-package",
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
    {
      path: "air-freight-forwarding",
      element: <Air />,
    },
    {
      path: "road-freight-forwarding",
      element: <Road />,
    },
    {
      path: "ocean-freight-forwarding",
      element: <Ocean />,
    },
    {
      path: "warehouse-and-storage",
      element: <Warehouse />,
    },
    {
      path: "frequently-asked-questions",
      element: <FAQ />,
    },
  ]);

  const onHamburgerClick = useCallback(() => {
    setShowHamburgerMenu((x) => !x);
  }, []);

  const ourSolutionClick = useCallback(() => {
    setOurSolution((x) => !x);
  }, []);

  return (
    <div className={styles.App}>
      <p className={styles.emailTo}>
        <a href="mailto:someone@example.com">
          <IoMdMail />
          seliteload@gmail.com
        </a>
      </p>
      <Header
        onHamburgerClick={onHamburgerClick}
        showHamburgerMenu={showHamburgerMenu}
      />

      <div
        className={
          showHamburgerMenu
            ? styles.hamburgerDropDownMenu
            : styles.hamburgerDropDownMenuHidden
        }
      >
        <a href="/">Home</a>

        <a href="/about-us">About</a>
        <OurSolution
          ourSolutionClick={ourSolutionClick}
          classes={ourSolution ? styles.ourSolution : styles.ourSolutionHidden}
        />
        <a href="/frequently-asked-questions">FAQ</a>
        <a href="/contact-us">Contact</a>
        <a href="/tracking">Tracking</a>
      </div>

      <RouterProvider router={router} />
      <Footer />
    </div>
  );
});

export default App;
