// import { component, PropTypes } from "react";

import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import { useEffect, useState } from "react";

function CityList() {
  //My stuff
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPotrait, setIsPotrait] = useState(
    window.innerWidth > window.innerHeight
  );
  const path = window.location.pathname;
  console.log(isPotrait);

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
  }, [path]);

  if (path.includes("app") && isMobile) {
    alert(
      "For best experience, please rotate your device to landscape mode, and turn on desktop mode."
    );
  }

  //CONSUMING THE CITIES CONTEXT
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
