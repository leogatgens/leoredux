import { createStore } from 'redux'

var defaultState = {
  colorDivPrincipal : 'red',
  optionsBackgroundColor : 'blue'
}


function colorsreducer(state = defaultState, action) {
  console.log({ 'action' : action.type ,
  valor : action.data});
  switch (action.type) {
    case 'CHANGE_COLOR':       
      return {
        ...state,
        colorDivPrincipal : action.data
        
       };
      case 'CHANGE_COLOR_OPTIONS':       
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
