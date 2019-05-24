import React from 'react';
import store from '../stores/configureStore'
import * as  actions from '../actions/actions'

import {List,ListItem,ListItemText} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export class  Options extends React.Component { 
constructor(props){
  super(props);
  this.state = {
    dense: false,
    secondary: false,
  };

}

generate() {
  return this.props.data.map(value =>
        <ListItem onClick={this.handleClick.bind(this,value.name)} key= {value.name}>
            <ListItemText
              primary= {value.name}
             
            />
          </ListItem>,
  );
}
  

handleClick = (event) => {    
  const index = store.getState().todos.indexCountry;
  const  actualCountry = store.getState().todos.countriesToShow[index];

    if(event === actualCountry.name){
     store.dispatch(actions.CambiarFondo('green'));
    
    }else{
      store.dispatch(actions.CambiarFondo('red'));
    }     
  }   
  render(){    
    const { dense } = this.state;
  return (
    <React.Fragment>
      <Typography variant="h6" >
      Seleccione el país de la bandera:
      </Typography>
  
        <List dense={dense}>
          {this.generate(
            
          )}
        </List>
      
   </React.Fragment>
   );
  }
}
