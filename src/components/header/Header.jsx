import React from "react"
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-smol.png'
import './header.scss'

function Header() {

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__identity">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__company-name">
            MoodHub
          </div>
        </div>
        <div className="header__nav-bar">
            <ul className="header__nav-list">
                <li className="header__nav-item">Мой дневник</li>
                <li className="header__nav-item">О дневнике</li>
                <li className="header__nav-item">Для алекситимистов</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;