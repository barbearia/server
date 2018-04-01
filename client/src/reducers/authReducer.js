/**
 * É definido um valor padrão para o objeto state para o caso de ele chegar undefined.
 */
export default function (state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}