import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './Cabecalho'

const Clientes = () => <h2>Lista de Clientes</h2>;
const Cliente = () => <h2>Novo Cliente</h2>;
const Home = () => <h2>Home</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Cabecalho />
          <Route path="/" exact component={Home} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/clientes/novo" component={Cliente} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;