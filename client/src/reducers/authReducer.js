import { FETCH_USER } from '../actions/types'

/**
 * State é iniciado como null para identificar o primeiro acesso.
 */
export default function (state = null, action) {
  switch(action.type) {
    case(FETCH_USER):
      return action.payload || false;
    default:
      return state;
  }
}