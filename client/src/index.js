import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Essa tag é uma espécie de "glue code" entre o react e o redux.
 */
import { Provider } from 'react-redux';

/**
 * Helpers do redux.
 */
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers'

/**
 * O primeiro argumento é uma lista de reducers.
 *
 * O segundo é relacionado ao estado inicial da aplicação
 * e possui maior utilidade quando se utiliza SSR.
 */
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);