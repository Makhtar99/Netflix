import React from 'react';
import './header.css';


function Navbar () {
    return (
        <header>
      <nav class="nav__container">

        <ul class="ul__nav">
          <li class="home"><a href="#">Films</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Emissions</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>   
    );
  };

  export default Navbar ;