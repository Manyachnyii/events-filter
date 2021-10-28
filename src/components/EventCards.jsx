import { EventCard } from "./EventCard";
import styles from "../styles/EventCards.module.css";

export const EventCards = ({ events }) => (
  <>
    {events.length ? (
      <section className={styles.events}>
        {events.map((el, id) => (
          <EventCard key={id} info={el} />
        ))}
      </section>
    ) : (
      <h1>Has not events</h1>
    )}
  </>
);

export default EventCards;
