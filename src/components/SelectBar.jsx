import styles from "../styles/SelectBar.module.css";

export const SelectBar = ({ cities, months, onChange }) => (
  <section className={styles.selectBar}>
    <span>City:</span>
    <Select name="city" array={cities} onChange={onChange} />

    <span>Month:</span>
    <Select name="month" array={months} onChange={onChange} />
  </section>
);

const Select = ({ name, array, onChange }) => (
  <select className={styles.select} name={name} onChange={onChange}>
    <option value="All" label="All" />
    {array && array.map((el, id) => <option key={id} value={el} label={el} />)}
  </select>
);

export default SelectBar;
