import React from 'react';
import './App.css';
import { Title } from './reduxcomponents/Title';
import { AuthorImage } from './reduxcomponents/AuthorImage';
import { Options } from './reduxcomponents/Options';
import store from './stores/configureStore'
import { ActionTypes as types} from './ActionTypes';
import AddressForm from './componentMaterialui/form'
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
    <Title></Title>
    <AuthorImage></AuthorImage>
    <Options></Options>
    <button onClick={this.manejarEventoClick}>presioname</button>
    </div>
    <div>
      <AddressForm></AddressForm>
    </div>
    </div>
  );
}
}
export default App;
