import React from 'react';
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
    if(event === this.props.actualCountry.name){
      this.props.handleSelectedCountry('green');   
    
    }else{     
      this.props.handleSelectedCountry('red');
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
