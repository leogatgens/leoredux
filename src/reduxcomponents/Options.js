import React from 'react';
const opciones = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4','Opcion 5','Opcion 6'];

export class  Options extends React.Component { 
  constructor(props){
      super(props);
     // Don't call this.setState() here! https://reactjs.org/docs/react-component.html#constructor
      this.state = { backgroundColor : 'blue'};
  }

   handleClick = (event) => {    
    if(event === 'Opcion 5'){
      this.setState ({
        backgroundColor : 'green'
      })
    }else{
      this.setState ({
        backgroundColor : 'blue'
      })
    }
     
  }
  render(){
  return (<div style={{float : 'left' , backgroundColor : this.state.backgroundColor , width : '450px', height : 350}}>
    <ul>
    {
      opciones.map((item) => {
        // Construct the onClick with our bound function
        return <li key={item} onClick={this.handleClick.bind(this,item)} >{item}</li>
      })
    }
    
    </ul>
  </div>);
  }
}
