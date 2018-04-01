/**
 * Tipos de action creators da aplicação.
 *
 * O propósito de um 'action creator' é ser invocado por um
 * componente e então criar uma 'action';
 *
 * Uma action é um objeto javascript com um atributo 'type' e
 * opcionalmente um payload.
 *
 * O action creator tradicionalmente retorna a action que é
 * então enviada por meio de uma dispatch function para os reducers
 * da aplicação.
 *
 * Usando redux-thunk, a action não precisa ser retornada, ele
 * fornece acesso direto à dispatch function para ser invocada
 * a qualquer momento.
 *
 * Os reducers então atualizam o estado na redux store.
 *
 * A redux store então envia o novo estado para os componentes.
 *
 */

export const FETCH_USER = 'fetch_user';