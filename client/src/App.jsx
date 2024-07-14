import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IoMdMail } from "react-icons/io";
import styles from "./css/App.module.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className={styles.App}>
      <p className={styles.emailTo}>
        <a href="mailto:someone@example.com">
          <IoMdMail />
          support@someone@example.com
        </a>
      </p>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
