import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const HeaderNavbar = ({ isActive }) => {
  return (
    <>
      <nav className={isActive === true ? 'navbar-ham' : 'navbar'}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              exact
              to="/"
            >
              Velkommen
              <FontAwesomeIcon icon={faChevronDown} className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/verdensballetten"
            >
              Verdensballetten
              <FontAwesomeIcon icon={faChevronDown} className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/news"
            >
              Nyheder
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/events"
            >
              Events of mødefacilititer
              <FontAwesomeIcon icon={faChevronDown} className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/opinions"
            >
              Hvad siger vores gæster
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/about"
            >
              Om Møllerup Gods
              <FontAwesomeIcon icon={faChevronDown} className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/contact"
            >
              Kontakt os
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/webshop"
            >
              Webshop
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNavbar
