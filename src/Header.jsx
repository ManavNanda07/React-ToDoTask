import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

export default function Header() {

    let currentUrl = useLocation().pathname.toString();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
        <Link
          className={`nav-item nav-link ${currentUrl === '/' ? 'active' : ''}`}
          to="/"
        >
          To Do Task
        </Link>
        <Link
          className={`nav-item nav-link ${currentUrl === '/tabs' ? 'active' : ''}`}
          to="/tabs"
        >
          Tabs Task
        </Link>
      </div>
  </div>
</nav>
  )
}
