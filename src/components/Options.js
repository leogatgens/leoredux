import React from 'react';
const opciones = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4','Opcion 5','Opcion 6'];




export class  Options extends React.Component {
  

   handleClick = (event) => {
    
    console.log("Hola manejo el click");
    console.log(event);
    // console.log(event.target.value);
    // console.log(event.target.innerHTML);
  }

  render(){
  return (<div style={{float : 'left' , backgroundColor : 'blue' , minWidth : '200px'}}>
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
