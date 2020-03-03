import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <main className="container">
      <div>
        Page not found, please go back to{' '}
        <Link to="/" className="link">
          homepage
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
