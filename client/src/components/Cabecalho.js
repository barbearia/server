import React, { Component } from 'react';
import logo from '../logo.jpg'
import './Cabecalho.css'

class Cabecalho extends Component {
  render() {
    return (
      <nav className="red darken-1">
        <div className="nav-wrapper">
          <a className="left brand-logo">
            <img src={logo} alt="Barbearia Clube do Bolinha"/>
          </a>
          <ul className="right">
            <li>
              <a>
                Google Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Cabecalho;