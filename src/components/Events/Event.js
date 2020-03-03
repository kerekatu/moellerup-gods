import React from 'react'

import { Link } from 'react-router-dom'

const Event = ({ events }) => {
  return events.map(event => (
    <article className="events__item" key={event.eventId}>
      <img src={event.eventImg} alt={event.eventId} className="events__img" />
      <div className="events__text">
        <h3 className="heading-tertiary">{event.eventTitle}</h3>
        <p className="events__paragraph">{event.eventContent}</p>
        <Link to={`/events/${event.eventId}`} className="events__link">
          {event.eventLink}
        </Link>
      </div>
    </article>
  ))
}

export default Event
