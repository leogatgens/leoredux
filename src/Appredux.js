import React from 'react';
import { Title } from './componentsRedux/Title';
import { AuthorImage } from './componentsRedux/AuthorImage';
import { Options } from './componentsRedux/Options';
import store from './stores/configureStore'
import { ActionTypes as types} from './ActionTypes';
import './App.css';


const paises = ['Costa Rica','Panama','Guatemala','Nicaragua','El Salvador','Honduras'];
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
    <AuthorImage  ></AuthorImage>
    <Options></Options>
     <button onClick={this.manejarEventoClick}>presioname</button>
    </div>
    <div>
      
    </div>
    </div>
  );
}
}
export default App;
