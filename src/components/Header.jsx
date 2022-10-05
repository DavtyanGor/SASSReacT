import React, { useState } from 'react'

export default function Header() {
  const [border, setBorder] = useState(1)
  const [burger, setBurger] = useState(false)

  return (
    <header className='header'>
        <div className="header__logo">
            <h1>Архитектурное бюро</h1>
        </div>
        <div className="burger" onClick={() => {setBurger(!burger)}}>
          <span className='lines line1'></span>
          <span className='lines line2'></span>
          <span className='lines line3'></span>
        </div>
        <nav className={burger ? 'active' : null}>
            <ul className='header__list'>
                <li><a href="#" onClick={() => {setBorder(1)}} className={border === 1  ? 'border__top' : null}>ГЛАВНАЯ</a></li>
                <li><a href="#" onClick={() => {setBorder(2)}} className={border === 2 ? 'border__top' : null}>О НАС</a></li>
                <li><a href="#" onClick={() => {setBorder(3)}} className={border === 3 ? 'border__top' : null}>ПРОЕКТЫ</a></li>
                <li><a href="#" onClick={() => {setBorder(4)}} className={border === 4 ? 'border__top' : null}>КОНТАКТЫ</a></li>
            </ul>
        </nav>
    </header>
  )
}
