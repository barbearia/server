/**
 * A razão para a existência desse index.js é a possibilidade
 * de importar todos os reducers como folder.
 */

import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * O nome das chaves do objeto representam a parte do estado que
 * será manipulada/gerenciada por o reducer inserido como valor.
 */
export default combineReducers({
  auth: authReducer
});