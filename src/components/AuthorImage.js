import React from 'react';



var styles1 = {
    margin: '20px',
    width: '350px',
    height: '250px',
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
