import { createStore } from 'redux'
import { ActionTypes as types} from '../ActionTypes';


var defaultState = {
  colorDivPrincipal : 'red',
  optionsBackgroundColor : 'blue'
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
    default:
      return state
  }
}

const store = createStore(colorsreducer)






export default store;
