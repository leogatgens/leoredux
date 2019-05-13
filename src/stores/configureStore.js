import { createStore } from 'redux'

var defaultState = {
  colorDivPrincipal : 'red'
}


function todosreducer(state = defaultState, action) {
  console.log({ state} );
  switch (action.type) {
    case 'ADD_TODO':       
      return {
        ...state,
        colorDivPrincipal : action.data
       };
    default:
      return state
  }
}

const store = createStore(todosreducer)






export default store;
