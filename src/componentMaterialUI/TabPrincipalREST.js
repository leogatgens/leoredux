import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CountryImage} from './CountryImage'
import {Options} from './Options'
import store from '../stores/configureStore'
import Button from '@material-ui/core/Button';


const styles =  ({
  Paper : {padding : 20, marginTop : 20, marginBottom : 10 ,  height : 300}
});

class TabPrincipal extends React.Component {  
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleNext = () => {
    store.dispatch({
      type: types.NEXT_COUNTRY,
      data: 'white'
    });
  }

  componentDidMount() {      
  this.ObtainCountries();   

   
  }  

  ObtainCountries() {    
    const serviceUrl = 'https://localhost:44319/api/values';  
    fetch(serviceUrl)
      .then(res => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      }).catch(error => this.setState({ error: error.message }));
  }

  countriesByContinent= () =>{
    let filter =store.getState().continentFilterText;
    let paises = store.getState().countries;
    if(filter !== 'All'){
      paises = store.getState().countries.filter(x => x.Continent === filter);  
      console.log(filter);
    }
    console.log(paises);
    return paises.slice(0,5);
  }  

  render() {
    const index = store.getState().indexCountry;
    const  flagUrl = store.getState().countries[index].flagUrl;
    return (
      <Grid container spacing={8} >
        <Grid item xs={3}>
         <Paper style={styles.Paper} >
         <CountryImage data = {flagUrl}></CountryImage>
        </Paper>         
        </Grid>
        <Grid item sm>
         <Paper style={styles.Paper} >
            <Options data={this.countriesByContinent()}></Options>
            <Button variant="contained" color="primary" style={{float:"right", marginRight: 5}} onClick={this.handleNext} >
              Next
            </Button>
         </Paper>         
        </Grid>      
      </Grid>
    );
  }
}

TabPrincipal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabPrincipal);