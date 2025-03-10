import { useEffect, useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPotrait, setIsPotrait] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsPotrait(window.innerWidth > window.innerWidth);
    };

    window.addEventListener("resize", handleSize);
    console.log(isMobile);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  if (isMobile && isPotrait) {
    alert("For best experience, please rotate your device to landscape mode");
  }

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
