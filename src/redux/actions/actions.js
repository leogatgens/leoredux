import fetch from 'cross-fetch';
import * as types from './actionsTypes';
/*
 * action creators
 */

export function CambiarFondo(text) {
  return { type: types.CHANGE_COLOR, text }
}

export function RequestContinents(index) {
  return { type: types.REQUEST_COUNTRIES_BY_CONTINENT, index }
}

export function nextCountry(index) {
  return { type:types.NEXT_COUNTRY, index }
}






export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  const serviceUrl = "https://localhost:44319/api/values";
  return function(dispatch) {
    return fetch(serviceUrl)
      .then(res => {
        return res.json();
      })
      .then(result => {
        dispatch(loadAuthorsSuccess(result));
      })
      .catch(error => this.setState({ error: error.message }));
  };
}
