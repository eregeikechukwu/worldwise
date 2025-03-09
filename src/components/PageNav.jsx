import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import hamburger from "../svgs/ic_bars.svg";
import { useState } from "react";

function PageNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Logo />

      <div className={`${styles.nav__toggle}`}>
        <div
          className={`${styles.nav__toggle__background} ${
            navOpen && styles.nav__toggle__open
          }`}
        ></div>
        <img
          src={hamburger}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
      </div>

      <ul>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
//Changes could be made just for commit sake
