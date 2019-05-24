import React from 'react';
import  {Header}  from './componentMaterialUI/Header';
import  Footer  from './componentMaterialUI/Footer';
import  TabPrincipal  from './componentMaterialUI/TabPrincipal';
import store from './stores/configureStore'
import './App.css';
import {Continents} from './data'


class App extends React.Component { 
  
componentDidMount(){
  store.subscribe(() => {
    this.setState({});
  })  
}  

render(){  
  return (
    <React.Fragment>
    <div style={{background:store.getState().Uireducer.colorDivPrincipal, height : 470} }>
     <Header></Header> 
      <TabPrincipal></TabPrincipal>
     <Footer data = {Continents}></Footer>     
    </div>
  
    </React.Fragment>
  );
}
}
export default App;
