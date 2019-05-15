import React from 'react';
import { ActionTypes as types} from '../ActionTypes';
import store from '../stores/configureStore'


var styles1 = {    
    width: '550px',
    height: '350px',
    backgroundColor: 'yellow',
    float : 'left',
    display: 'inline-block',
  };
export function AuthorImage(props) {

  function manejarEventoClick(){
    store.dispatch({
      type: types.CHANGE_COLOR,
      data: 'purple'
    })
  }


  return ( <React.Fragment>
    <img src='http://localhost:3000/descarga.jfif' alt="logo" />
    <button onClick={manejarEventoClick}>presioname</button>
    </React.Fragment>
      );
}
