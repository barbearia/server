import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import * as actions from '../actions'

import Cabecalho from './Cabecalho';

const Clientes = () => <h2>Lista de Clientes</h2>;
const Cliente = () => <h2>Novo Cliente</h2>;
const Home = () => <h2>Página Inicial</h2>;

class App extends Component {

  componentDidMount() {
    /**
     * Os action creators estão acessíveis por meio das props.
     */
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Cabecalho/>
            <Route path="/" exact component={Home}/>
            <Route path="/clientes" exact component={Clientes}/>
            <Route path="/clientes/novo" component={Cliente}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/**
 * O objetivo da função connect é possibilitar a chamada de action creators
 * a partir de componentes react.
 *
 * O primeiro argumento é o state do componente atual,
 * o segundo é a lista de action creators.
 */
export default connect(null, actions)(App);