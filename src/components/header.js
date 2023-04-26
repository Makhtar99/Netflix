import React from 'react';
import './header.css';


function Navbar () {
    return (
        <header>
      <nav className="nav__container">
      <span class="logo"></span>

        <ul className="ul__nav">
          <li className="home"><a href="#">Films</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Emissions</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>   
    );
  };

  export default Navbar ;