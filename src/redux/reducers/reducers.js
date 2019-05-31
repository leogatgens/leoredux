import { Continents } from '../data';
import { countriesByContinent } from '../stores/getContinentText';


const listaPaisesInicial = countriesByContinent(Continents.indexOf('All'));
//Valores defualt de los estados
var defaultState = {
  countriesToShow: listaPaisesInicial.listaPaises,
  indexCountry: listaPaisesInicial.paisActual,
  selectedTabIndex: 0
};
var defaultUiState = {
  colorDivPrincipal: 'white'
};
function Uireducer(state = defaultUiState, action) {
  console.log({
    action
  });
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        colorDivPrincipal: action.text
      };
    default:
      return state;
  }
}
 function countryreducer(state = defaultState, action) {
  console.log({action});
  let resultado = null;
  switch (action.type) {
    case 'REQUEST_COUNTRIES_BY_CONTINENT':
      resultado = countriesByContinent(action.index);
      return {
        ...state,
        countriesToShow: resultado.listaPaises,
        indexCountry: resultado.paisActual,
        selectedTabIndex: action.index
      };
    case 'NEXT_COUNTRY':
      resultado = countriesByContinent(action.index);
      return {
        ...state,
        countriesToShow: resultado.listaPaises,
        indexCountry: resultado.paisActual,
      };
    default:
      return state;
  }
}


export default  function reducers(state = {}, action) {
  return {
    Uireducer: Uireducer(state.visibilityFilter, action),
    todos: countryreducer(state.todos, action)
  }
}