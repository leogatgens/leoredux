import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';
import {paises} from '../containerMaterialUI/data'

var defaultState = {
  colorDivPrincipal : 'white',
  optionsBackgroundColor : 'blue',
  countries : paises,
  indexCountry : 2
}

function getRandomCountry(){
 let index = Math.floor(Math.random() * 5) ;
 return index;
}
function colorsreducer(state = defaultState, action) {
  console.log({ 'action' : action.type ,
  valor : action.data});
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
       case types.REQUEST_OTHERS_COUNTRIES :
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
