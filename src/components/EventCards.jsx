import { EventCard } from "./EventCard";
import styles from "../styles/EventCards.module.css";

export const EventCards = ({ events, bookmarks, handleBookmarkClick }) => (
  <>
    {events.length ? (
      <section className={styles.events}>
        {events.map((el) => {
          let bookmarked;
          if (bookmarks) {
            bookmarked = bookmarks.includes(el.id);
          } else {
            bookmarked = false;
          }

          return (
            <EventCard
              key={el.id}
              info={el}
              bookmarked={bookmarked}
              handleBookmarkClick={handleBookmarkClick}
            />
          );
        })}
      </section>
    ) : (
      <h1>Has not events</h1>
    )}
  </>
);

export default EventCards;
