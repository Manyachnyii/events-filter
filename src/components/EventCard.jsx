import styles from "../styles/EventCard.module.css";

import mark from "../assets/icons/mark.svg";
import unmark from "../assets/icons/unmark.svg";

export const EventCard = ({
  info: { id, name, image, day },
  bookmarked,
  handleBookmarkClick,
}) => (
  <div
    className={styles.card}
    style={{
      background: `center bottom / cover no-repeat url(${image}), rgba(0, 0, 0, 0.2)`,
      backgroundBlendMode: "overlay",
    }}
  >
    <span>
      <div onClick={() => handleBookmarkClick(id)}>
        <img
          className={styles.bookmark}
          src={bookmarked ? mark : unmark}
          alt=""
        />
      </div>
      <span className={styles.day}>{day}</span>
    </span>
    <span className={styles.name}>{name}</span>
  </div>
);

export default EventCard;
