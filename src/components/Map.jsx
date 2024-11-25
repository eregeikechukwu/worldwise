import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const Navigate = useNavigate();
  //Alright this useNavigate hook is used to navigate to any url on the page. See when we used it down there

  const [SearchParams, setSearchParams] = useSearchParams();

  const lat = SearchParams.get("lat");
  const lng = SearchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        Navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}

export default Map;
