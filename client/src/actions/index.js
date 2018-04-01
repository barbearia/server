import axios from 'axios';
import FETCH_USER from './types'

/**
 * Action creator utilizado para atualizar o estado mantido pelo redux.
 *
 * Quando o redux-thunk vê que o action creator retorna uma function,
 * ao invés de um objeto, ele automaticamente passa a dispatch function
 * para ser invocada quando houver necessidade.
 */
const fetchUser = () => {
  return function (dispatch) {
    axios.get('/api/current_user').then(res => dispatch({
      type: FETCH_USER,
      payload: res
    }));
  }

}