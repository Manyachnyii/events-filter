import { unifiqueArray } from "../utils/unifiqueArray";

import styles from "../styles/SelectBar.module.css";

export const SelectBar = ({ data, onChange }) => {
  const cities = unifiqueArray(data.map(({ city }) => city));
  const months = unifiqueArray(data.map(({ month }) => month));

  return (
    <section className={styles.selectBar}>
      <span>City:</span>
      <Select name="city" array={cities} onChange={onChange} />

      <span>Month:</span>
      <Select name="month" array={months} onChange={onChange} />
    </section>
  );
};

const Select = ({ name, array, onChange }) => (
  <select className={styles.select} name={name} onChange={onChange}>
    <option value="All" label="All" />
    {array && array.map((el, id) => <option key={id} value={el} label={el} />)}
  </select>
);

export default SelectBar;
