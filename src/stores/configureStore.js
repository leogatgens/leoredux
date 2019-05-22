import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';
import { Continents } from '../containerMaterialUI/data';

import { countriesByContinent,  getRandomCountry } from './getContinentText';
var defaultState = {
  colorDivPrincipal : 'white',
  optionsBackgroundColor : 'blue',
  countriesToShow : countriesByContinent(Continents.indexOf('All')),
  indexCountry : 0,
  selectedTabIndex : 0

}
function colorsreducer(state = defaultState, action) {
  //  console.log({ 'action' : action.type ,
  //  valor : action.data});
  // console.log(defaultState);
  switch (action.type) {
    case types.CHANGE_COLOR :       
      return {
        ...state,
        colorDivPrincipal : action.data
        
       };      
       case types.REQUEST_COUNTRIES_BY_CONTINENT :
       return {
         ...state,
         colorDivPrincipal : 'white',
         countriesToShow : countriesByContinent(action.data),       
         selectedTabIndex : action.data
       }
       case types.NEXT_COUNTRY:
       return {
         ...state,
        
         
       }
    default:
      return state
  }
}
export const store = createStore(colorsreducer)
export default store;
