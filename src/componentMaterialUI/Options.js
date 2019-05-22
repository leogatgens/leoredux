import React from 'react';
import store from '../stores/configureStore'
import { ActionTypes as types} from '../ActionTypes';
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
              secondary={  this.state.secondary ? value : null }
            />
          </ListItem>,
  );
}
  

handleClick = (event) => {    
  const index = store.getState().indexCountry;
  const  actualCountry = store.getState().countriesToShow[index];
    if(event === actualCountry.name){
      store.dispatch({
        type: types.CHANGE_COLOR,
        data: 'green'
      })
    }else{
      store.dispatch({
        type: types.CHANGE_COLOR,
        data: 'red'
      })
    }     
  }   
  render(){    
    const { dense, secondary } = this.state;
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
