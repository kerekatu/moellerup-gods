import React from 'react'

import Hero from '../components/Hero'
import News from '../components/News/News'
import Events from '../components/Events/Events'
import Social from '../components/Social/Social'

const HomePage = () => {
  return (
    <main className="container home">
      <Hero />
      <News />
      <Events />
      <Social />
    </main>
  )
}

export default HomePage
