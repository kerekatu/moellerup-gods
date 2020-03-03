import React, { useState } from 'react'

import Event from './Event'

import eventsData from './eventsData'

const Events = () => {
  const [events] = useState(eventsData)

  return (
    <section className="events">
      <div className="events__title">
        <h3 className="heading-tertiary">
          Møllerup Gods tilbyder en perlerække af muligheder
        </h3>
        <p className="paragraph">
          Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler,
          vi er også en virksomhed med højt til løften, masser af muligheder og
          plads til aktiviteter på 425 hektar - for private og erhverv
        </p>
      </div>
      <Event events={events} />
    </section>
  )
}

export default Events
