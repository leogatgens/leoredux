import React from 'react';
import  {Header}  from './componentMaterialUI/Header';
import  Footer  from './componentMaterialUI/Footer';
import  TabPrincipal  from './componentMaterialUI/TabPrincipal';

import './App.css';
import {Continents} from './data'
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
class App extends React.Component { 

render(){  
  console.log(this);
  return (
    <ReduxProvider store={store}>
    <React.Fragment>
    <div style={{background:store.getState().colorDivPrincipal, height : 470} }>
     <Header></Header> 
      <TabPrincipal></TabPrincipal>
     <Footer data = {Continents}></Footer>     
    </div>  
    </React.Fragment>
    </ReduxProvider>
  );
}
}
export default App;
