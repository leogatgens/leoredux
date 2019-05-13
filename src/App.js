import React from 'react';
import logo from './logo.svg';
import './App.css';
import { functionTypeAnnotation } from '@babel/types';
import { Title } from './components/Title';
import { AuthorImage } from './components/AuthorImage';
import { Options } from './components/Options';

class App extends React.Component {
constructor(){
  super();
  this.state =   {
    colorDivPrincipal : 'red'
    };
}


 HandleChangeBackgroudColor = () =>{ 
  this.CambiarFondo();
}
  CambiarFondo() {
    
    this.setState((prevState) => {
      if(prevState.colorDivPrincipal === 'white')
      {
        prevState.colorDivPrincipal = 'red';
      }else{
        prevState.colorDivPrincipal = 'white';
      }

      return prevState;

    });
  }

render(){
  return (
    <div style={{background:this.state.colorDivPrincipal, height : 500} }>
    <Title></Title>
    <AuthorImage eventoCambioColor = {this.HandleChangeBackgroudColor} ></AuthorImage>
    <Options></Options>
    </div>
  );
}
}
export default App;
