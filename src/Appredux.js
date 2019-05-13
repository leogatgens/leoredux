import React from 'react';
import logo from './logo.svg';
import './App.css';
import { functionTypeAnnotation } from '@babel/types';
import { Title } from './reduxcomponents/Title';
import { AuthorImage } from './reduxcomponents/AuthorImage';
import { Options } from './reduxcomponents/Options';
import store from './stores/configureStore'


class App extends React.Component {
constructor(){
  super(); 
}
componentDidMount(){
  store.subscribe(() => {
    this.setState({});
  })  
}  

render(){  
  return (
    <div style={{background:store.getState().colorDivPrincipal, height : 500} }>
    <Title></Title>
    <AuthorImage></AuthorImage>
    <Options></Options>
    </div>
  );
}
}
export default App;