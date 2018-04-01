import React, { Component } from 'react';

class Cabecalho extends Component {
  render() {
    return (
      <nav className="cyan">
        <div className="nav-wrapper">
          <a className="left brand-logo">Clube do Bolinha</a>
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