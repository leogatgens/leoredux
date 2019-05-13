import React from 'react';



var styles1 = {    
    width: '550px',
    height: '350px',
    backgroundColor: 'yellow',
    float : 'left',
    display: 'inline-block',
  };
export function AuthorImage() {
  return (<div style={styles1}>
    <img src='http://localhost:3000/descarga.jfif' alt="logo" />
    <button>presioname</button>
  </div>);
}
