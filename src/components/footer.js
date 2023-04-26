import React from 'react';
import './footer.css';

function Footer () {
    return (
        <footer className="footer-avec-img">
        <div className="conteneur">
          <ul>
            <li> <a href> Audiodescription</a> </li>
            <li> <a href> Relations Investisseur </a> </li>
            <li> <a href> Confidentialité</a> </li>
            <li> <a href> Nous Contacter</a></li>
          </ul>

          <ul>
            <li> <a href> Centre d'Aide</a> </li>
            <li> <a href> Recrutement </a> </li>
            <li> <a href> Information Légales</a> </li>
          </ul>

          <ul>
            <li> <a href> Presse</a> </li>
            <li> <a href> Conditions d'utilisation </a> </li>
            <li> <a href> Mention Légales</a> </li>
          </ul>

        </div>
      </footer>
    );
}

export default Footer;