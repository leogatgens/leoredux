import React from 'react';
import  {Header}  from './componentMaterialUI/Header';
import  Footer  from './componentMaterialUI/Footer';
//import  TabPrincipal  from './componentMaterialUI/TabPrincipal';
import  TabPrincipal  from './componentMaterialUI/TabPrincipalREST';
import store from './stores/configureStore'
import './App.css';
import {Continents} from './containerMaterialUI/data'


class App extends React.Component { 
  
componentDidMount(){
  store.subscribe(() => {
    this.setState({});
  })  
}  

render(){  
  return (
    <React.Fragment>
    <div style={{background:store.getState().colorDivPrincipal, height : 470} }>
     <Header></Header> 
     <TabPrincipal></TabPrincipal>
     <Footer data = {Continents}></Footer>    
    </div>
  
    </React.Fragment>
  );
}
}
export default App;
