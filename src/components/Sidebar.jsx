import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      {/* THis <outlet /> Tag is used to display the nested ROuted tag elements, i dont really understand how these thaings actualy work  */}

      <Footer />
    </div>
  );
}

export default Sidebar;
