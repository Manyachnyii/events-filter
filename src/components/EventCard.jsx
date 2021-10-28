import styles from "../styles/EventCard.module.css";

export const EventCard = ({ info: { name, image, day } }) => (
  <div
    className={styles.card}
    style={{
      background: `center bottom / cover no-repeat url(${image}), rgba(0, 0, 0, 0.2)`,
      backgroundBlendMode: "overlay",
    }}
  >
    <span className={styles.day}>{day}</span>
    <span className={styles.name}>{name}</span>
  </div>
);

export default EventCard;
