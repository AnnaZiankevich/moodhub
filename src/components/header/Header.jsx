import React from "react"
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-smol.png'
import './header.scss'

function Header() {

  return (
    <div className="header">
      {/* {console.log('Rendered Header component')} */}
      <div className="header__content">
        <div className="header__identity">
          <Link to="/">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="header__company-name">
              MoodHub
            </div>
          </Link>
        </div>
        <div className="header__nav-bar">
            <ul className="header__nav-list">
                <Link to="/"><li className="header__nav-item">Мой дневник</li></Link>
                <Link to="/about-diary"><li className="header__nav-item">О дневнике</li></Link>
                <Link to="/for-alexithymitists"><li className="header__nav-item">Для алекситимистов</li></Link>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;