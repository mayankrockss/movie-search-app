import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>
      </nav>

      <header className='center'>
        <h1>Movie Search</h1>
      </header>
    </div>
  )
}

export default Header
