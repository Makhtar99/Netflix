import React from 'react';
import '../Css/header.css';


function Navbar () {
    return (
        <header>
      <nav className="nav__container">
      <span className="logo"></span>

        <nav className="ul__nav">
          <li className="home"><a href="#">Films</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Emissions</a></li>
          <li><a href="#">Login</a></li>
        </nav>
      </nav>
    </header>   
    );
  };

  export default Navbar ;