import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Css/header.css';

function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav className="nav__container">
        <span className="logo"></span>
        <div class="center">
          <div></div>
        </div>

        <nav className="ul__nav">
          <li className={location.pathname === '/' ? 'home' : ''}>
            <NavLink exact to="/" activeClassName="active">
              Films
            </NavLink>
          </li>
          <li className={location.pathname === '/series' ? 'home' : ''}>
            <NavLink to="/series" activeClassName="active">
              Séries
            </NavLink>
          </li>
          <li className={location.pathname === '/emissions' ? 'home' : ''}>
            <NavLink to="/emissions" activeClassName="active">
              Emissions
            </NavLink>
          </li>
          <li className={location.pathname === '/login' ? 'home' : ''}>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
