import React from 'react';
import { tsPropertySignature } from '@babel/types';



var styles1 = {    
    width: '550px',
    height: '350px',
    backgroundColor: 'yellow',
    float : 'left',
    display: 'inline-block',
  };
export function AuthorImage(props) {

  function manejarEventoClick(){
    props.eventoCambioColor();
  }


  return (<div style={styles1}>
    <img src='http://localhost:3000/descarga.jfif' alt="logo" />
    <button onClick={manejarEventoClick}>presioname</button>
  </div>);
}
