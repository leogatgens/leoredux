import React from 'react';
import  {Header}  from './componentMaterialUI/Header';
import  Footer  from './componentMaterialUI/Footer';
import  TabPrincipal  from './componentMaterialUI/TabPrincipal';
import store from './stores/configureStore'
import { ActionTypes as types} from './ActionTypes';
import './App.css';
import {Continents} from './containerMaterialUI/data'


class App extends React.Component { 

componentDidMount(){
  store.subscribe(() => {
    this.setState({});
  })  
}  

manejarEventoClick(){
  store.dispatch({
    type: types.CHANGE_COLOR,
    data: 'Maroon'
  })
}

render(){  
  return (
    <div>
    <div style={{background:store.getState().colorDivPrincipal, height : 500} }>
     <Header></Header> 
     <TabPrincipal></TabPrincipal>
     <Footer data = {Continents}></Footer>
  
    <button onClick={this.manejarEventoClick}>presioname</button>
    </div>
    <div>
      
    </div>
    </div>
  );
}
}
export default App;
