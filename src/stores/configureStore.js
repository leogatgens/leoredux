import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';
import {paises} from '../containerMaterialUI/data'
import {Continents} from '../containerMaterialUI/data'
var defaultState = {
  colorDivPrincipal : 'white',
  optionsBackgroundColor : 'blue',
  countries : paises,
  indexCountry : 2,
  continentFilterText : 'All',
  selectedTabIndex : 0

}
function getContinentText(index){
  let currentContinent = Continents[index];
  return currentContinent;
}
function getRandomCountry(){
 let index = Math.floor(Math.random() * 5) ;
 return index;
}

function getRandomCountryByContinent(){
  let index = Math.floor(Math.random() * 5) ;
  return index;
 }
function colorsreducer(state = defaultState, action) {
  console.log({ 'action' : action.type ,
  valor : action.data});
  console.log(defaultState);
  switch (action.type) {
    case types.CHANGE_COLOR :       
      return {
        ...state,
        colorDivPrincipal : action.data
        
       };
      case types.CHANGE_COLOR_OPTIONS:       
      return {
        ...state,        
        optionsBackgroundColor : action.data 
       };
       case types.REQUEST_COUNTRIES_BY_CONTINENT :
       return {
         ...state,
         colorDivPrincipal : 'white',
         countries : paises,
         indexCountry :  getRandomCountryByContinent(),
         continentFilterText : getContinentText(action.data),
         selectedTabIndex : action.data
       }
       case types.NEXT_COUNTRY:
       return {
         ...state,
         colorDivPrincipal : action.data,
         countries : paises,
         indexCountry :  getRandomCountry()
       }
    default:
      return state
  }
}
const store = createStore(colorsreducer)
export default store;
