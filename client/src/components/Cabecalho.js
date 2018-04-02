import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.jpg'
import './Cabecalho.css'

class Cabecalho extends Component {

  exibirLoginLogout() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google">
            Google Login
          </a>
        );
      default:
        return (
          <a href="/api/logout">
            Sair
          </a>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav className="red darken-1">
        <div className="nav-wrapper">
          <a className="left brand-logo">
            <img src={logo} alt="Barbearia Clube do Bolinha"/>
          </a>
          <ul className="right">
            <li>
              { this.exibirLoginLogout() }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

/**
 * Função que será invocada pelo redux para atualizar o 'state'.
 *
 * O objeto auth está configurado no index.js dos reducers para
 * ser produzido pelo authReducer.
 */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Cabecalho);