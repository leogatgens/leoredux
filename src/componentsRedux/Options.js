import React from 'react';
import store from '../stores/configureStore'

const opciones = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4','Opcion 5','Opcion 6'];

export class  Options extends React.Component { 

  componentDidMount(){
    store.subscribe(() => {
      this.setState({});
    })  
  }  

   handleClick = (event) => {    
    if(event === 'Opcion 5'){
      store.dispatch({
        type: types.CHANGE_COLOR_OPTIONS,
        data: 'green'
      })
    }else{
      store.dispatch({
        type: types.CHANGE_COLOR_OPTIONS,
        data: 'blue'
      })
    }
     
  }

   manejarEventoClick(){
    store.dispatch({
      type: types.CHANGE_COLOR,
      data: 'white'
    })
  }
  render(){
  return (<div style={{float : 'left' , backgroundColor : store.getState().optionsBackgroundColor , width : '450px', height : 350}}>
    <ul>
    {
      opciones.map((item) => {
        // Construct the onClick with our bound function
        return <li key={item} onClick={this.handleClick.bind(this,item)} >{item}</li>
      })
    }
    
    </ul>
    <button onClick={this.manejarEventoClick}>presioname</button>
  </div>);
  }
}
