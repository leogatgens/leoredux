import React from 'react';
import store from '../stores/configureStore'
import { ActionTypes as types} from '../ActionTypes';
import {List,ListItem,ListItemText} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
        <ListItem onClick={this.handleClick.bind(this,value)} key= {value}>
            <ListItemText
              primary= {value}
              secondary={  this.state.secondary ? value : null }
            />
          </ListItem>,
  );
}
  

handleClick = (event) => {    
     console.log(event);
    if(event === store.getState().country){
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
    <Grid item xs={12} md={6}>
    <Typography variant="h6" >
     Seleccione el país de la bandera:
    </Typography>
    <div >
      <List dense={dense}>
        {this.generate(
          
        )}
      </List>
    </div>
  </Grid>);
  }
}
