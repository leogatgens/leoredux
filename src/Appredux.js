import React from 'react';
import { Title } from './componentsRedux/Title';
import { AuthorImage } from './componentsRedux/AuthorImage';
import { Options } from './componentsRedux/Options';
import store from './stores/configureStore'

import './App.css';



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
    <div style={{background:store.getState().todos.colorDivPrincipal, height : 500} }>
    <Title></Title>
    {/* <AuthorImage  ></AuthorImage>
    <Options></Options>
     <button onClick={this.manejarEventoClick}>presioname</button> */}
    </div>
    <div>
      
    </div>
    </div>
  );
}
}
export default App;
