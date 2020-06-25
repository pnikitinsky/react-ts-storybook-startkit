import React from 'react'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper 8e24aa purple darken-1">
      <a href="#" className="brand-logo">React + typescript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Tasks list</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </nav>
)
