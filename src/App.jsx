import { useState, useEffect } from "react";
import { EventCards } from "./components/EventCards";
import { SelectBar } from "./components/SelectBar";

import { unifiqueArray } from "./utils/unifiqueArray";
import { formatData } from "./utils/formatData";

import styles from "./styles/App.module.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [select, setSelect] = useState({ city: "All", month: "All" });
  const [bookmarks, setBookmarks] = useState([]);

  const cities = unifiqueArray(data.map(({ city }) => city));
  const months = unifiqueArray(data.map(({ month }) => month));

  useEffect(() => {
    const fetchData = async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      const result = formatData(json);
      setData(result);
      setIsLoading(false);
    };
    fetchData(
      "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
    );
  }, []);

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

  useEffect(() => {
    const restoreBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmarks(restoreBookmarks);
  }, []);

  const saveToLocaStorage = (item) => {
    localStorage.setItem("bookmarks", JSON.stringify(item));
  };

  const handleChange = (e) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookmark = (id) => {
    let newBookmarks;
    if (bookmarks && bookmarks.includes(id)) {
      newBookmarks = bookmarks.filter((el) => el !== id);
    } else if (bookmarks) {
      newBookmarks = unifiqueArray([...bookmarks, id]);
    } else {
      newBookmarks = [id];
    }
    setBookmarks(newBookmarks);
    saveToLocaStorage(newBookmarks);
  };

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>Event Listing</h1>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <SelectBar cities={cities} months={months} onChange={handleChange} />

          <EventCards
            events={events}
            bookmarks={bookmarks}
            handleBookmarkClick={handleBookmark}
          />
        </>
      )}
    </article>
  );
};

export default App;
