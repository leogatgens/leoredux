import React from 'react';
import store from '../stores/configureStore'
import { ActionTypes as types} from '../ActionTypes';


export class  Options extends React.Component { 
constructor(props){
  super(props);
}
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
  return (<div style={{ backgroundColor : store.getState().optionsBackgroundColor }}>
    <ul>
    {
      this.props.data.map((item) => {
        // Construct the onClick with our bound function
        return <li key={item} onClick={this.handleClick.bind(this,item)} >{item}</li>
      })
    }
    
    </ul>
    <button onClick={this.manejarEventoClick}>presioname</button>
  </div>);
  }
}
