import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  //THis useparams stuff here is used to get the bparams assigned to the city component.  it normally returns it as an object with the name assigned to the path in the router(eg: path ="cities/id:"), so therefore, herethe id will serve as the key of the returned params object
  const { getCity, currentCity, isLoading } = useCities();

  // if (isLoading) return <Spinner />;//This is this position will give an error. rememer that rule of effetcts each having their index, and the return before the effect could punctuate the hook order

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  // const [SearchParams, setSearchParams] = useSearchParams();

  // const lat = SearchParams.get("lat");
  // const lng = SearchParams.get("lng");

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
