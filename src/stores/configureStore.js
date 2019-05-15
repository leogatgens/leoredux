import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';
import {paises,paises2} from '../containerMaterialUI/data'

var defaultState = {
  colorDivPrincipal : 'white',
  optionsBackgroundColor : 'blue',
  countries : paises,
  imageUrl : 'http://localhost:3000/img/brazil-flag-button-square-xs.png',
  country : 'Brazil'
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
         countries : paises2,
         imageUrl : 'http://localhost:3000/img/china-flag-button-square-xs.png',
         country : "China"
       }
    default:
      return state
  }
}
const store = createStore(colorsreducer)
export default store;
