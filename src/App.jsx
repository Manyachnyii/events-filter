import { useState, useEffect } from "react";
import { EventCards } from "./components/EventCards";
import { SelectBar } from "./components/SelectBar";

import { Dataset } from "./utils/dataset";

import styles from "./styles/App.module.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [select, setSelect] = useState({ city: "All", month: "All" });

  const data = Dataset();

  useEffect(() => {
    const { city, month } = select;

    const filterCity = (obj) => obj.filter((el) => el.city === city);
    const filterMonth = (obj) => obj.filter((el) => el.month === month);

    const filterByCity = filterCity(data);
    const filterByMonth = filterMonth(data);
    const filterByCityAndMonth = filterMonth(filterCity(data));

    if (city !== "All" && month !== "All") {
      setEvents(filterByCityAndMonth);
    } else if (city !== "All" && month === "All") {
      setEvents(filterByCity);
    } else if (city === "All" && month !== "All") {
      setEvents(filterByMonth);
    } else {
      setEvents(data);
    }
  }, [data, select]);

  const handleChange = (e) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>Event Listing</h1>

      <SelectBar data={data} onChange={handleChange} />

      <EventCards events={events} />
    </article>
  );
};

export default App;
