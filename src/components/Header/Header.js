import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderNavbar from './HeaderNavbar'
import LogoImg from '../../assets/images/logo.png'

const Header = () => {
  const [active, setActive] = useState({
    isActive: false
  })

  const handleOpenMenu = () => {
    setActive({
      isActive: !active.isActive
    })
  }

  return (
    <header className="header">
      <div className="header__lang">
        <button onClick={handleOpenMenu} className="btn-hamburger">
          <i
            className={
              active.isActive === true
                ? 'icon-hamburger icon-hamburger--active'
                : 'icon-hamburger'
            }
          ></i>
        </button>
        <button className="btn btn--transparent mr-md">Dansk</button>
        <button className="btn btn--transparent">English</button>
      </div>
      <Link to="/" className="logo">
        <img src={LogoImg} alt="Logo" className="logo__img" />
      </Link>
      <HeaderNavbar isActive={active.isActive} />
    </header>
  )
}

export default Header
