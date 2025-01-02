import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
//Any ways, i dont have anything to do here. The point is tyaht tghis pages folder contains the pages as a whole, while the components folder hold components that you culd use anywhere, so they are not really major parts of the router structure.
//Happy new year Tech world
