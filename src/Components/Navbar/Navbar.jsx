import { useState, useEffect } from "react";
import logo from "../../Images/inuse/ym.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setWidth(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          className={`${styles.nav} navbar p-0 fixed-top navbar-expand-lg bg-body-tertiary`}
        >
          <div className="container-fluid">
            <a className="navbar-brand " href="/">
              <img src={logo} alt="" style={{ width: "11%" }} />
            </a>
          </div>
        </nav>
      </div>
      <div
        className={`${styles.scroll} fixed-top`}
        style={{ width: `${width}%` }}
      ></div>
    </>
  );
}
