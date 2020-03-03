import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// PAGES
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import EventsPage from '../pages/EventsPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import Page from './Page'

// COMPONENTS
import Event from '../components/Events/Event'

const AppRouter = () => {
  const mainTitle = 'Møllerup Gods –'

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page component={HomePage} title={`${mainTitle} Homepage`} />
          )}
        />
        <Route
          path="/news"
          render={() => (
            <Page component={NewsPage} title={`${mainTitle} News`} />
          )}
        />
        <Route
          exact
          path="/events"
          render={() => (
            <Page component={EventsPage} title={`${mainTitle} Events`} />
          )}
        />
        <Route
          path="/events/:id"
          render={() => (
            <Page component={Event} title={`${mainTitle} Events`} />
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Page component={ContactPage} title={`${mainTitle} Contact`} />
          )}
        />
        <Route
          render={() => (
            <Page
              component={NotFoundPage}
              title={`${mainTitle} Not Found 404`}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRouter
