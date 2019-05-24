import React from 'react';

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
      type: 'CHANGE_COLOR',
      data: 'purple'
    })
  }


  return (<div style={styles1}>
    <img src='http://localhost:3000/descarga.jfif' alt="logo" />
    <button onClick={manejarEventoClick}>presioname</button>
  </div>);
}
