import React from 'react'
import logo from './logo.svg'
import "./Header.css"


function Header() {
  return (
      <div className='navbar'>
        <img src={logo} alt="" className='App-logo'/>
        <ul>
          <li>Username</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
  )
}

export default Header