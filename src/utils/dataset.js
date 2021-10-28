import { useState, useEffect } from "react";

export const Dataset = () => {
  const [dataset, setDataset] = useState([]);
  const url =
    "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json";

  useEffect(() => {
    const fetchData = async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      const result = await formatData(json);
      return await result;
    };

    fetchData(url).then((data) => setDataset(data));
  }, []);

  return dataset;
};

const formatData = (data) => {
  return data.map(({ id, name, image, city, date }) => {
    const obj = { id, name, image, city };

    const isoDate = formatDateToISO(date);

    obj.day = isoDate.getDate().toString();
    obj.month = isoDate.toLocaleString("en-US", { month: "long" });

    return obj;
  });
};

const formatDateToISO = (date) => new Date(date.split(".").reverse().join("-"));

export default Dataset;
