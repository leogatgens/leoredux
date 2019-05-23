import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';
import { Continents } from '../containerMaterialUI/data';

import { countriesByContinent } from './getContinentText';



const algo = countriesByContinent(Continents.indexOf('All'));

//Valores defualt de los estados
var defaultState = {
  colorDivPrincipal : 'white',
  optionsBackgroundColor : 'blue',
  countriesToShow :algo.listaPaises,
  indexCountry : algo.paisActual,
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
         let resultado =  countriesByContinent(action.data);
       return {
         ...state,        
         colorDivPrincipal : 'white',
         countriesToShow : resultado.listaPaises , 
         indexCountry : resultado.paisActual,      
         selectedTabIndex : action.data
       }
       case types.NEXT_COUNTRY:
          
       return {
         ...state,
         colorDivPrincipal : 'white',
         
         
       }
    default:
      return state
  }
}
export const store = createStore(colorsreducer)
export default store;
