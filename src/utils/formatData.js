export const formatData = (data) =>
  data.map(({ id, name, image, city, date }) => {
    const obj = { id, name, image, city };

    const isoDate = formatDateToISO(date);

    obj.day = isoDate.getDate().toString();
    obj.month = isoDate.toLocaleString("en-US", { month: "long" });

    return obj;
  });

const formatDateToISO = (date) => new Date(date.split(".").reverse().join("-"));
