// ================================
// DEPENDENCIES
// ================================
// packages / etc.
import React from 'react'

// etc. static files
import banner from '../images/banner.png'

function Header(props) {
  return (
    <header>
      {/* BANNER */}
      <img src={banner} alt="banner"/>
      {/* NAVIGATION */}
      <nav>
        <a onClick={() => { props.changeState('about') }}>about</a>
        <a onClick={() => { props.changeState('items') }}>items</a>
        <a href="https://twitter.com/suqasight">contact</a>
      </nav>
    </header>
  )
}

export default Header
