import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">CDSTech</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
        <NavLink exact className="nav-link active" activeClassName="menu_active" aria-current="page"  to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar