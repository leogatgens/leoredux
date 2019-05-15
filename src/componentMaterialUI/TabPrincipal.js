import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CountryImage} from './CountryImage'
import {Options} from './Options'
import store from '../stores/configureStore'


const styles =  ({
  Paper : {padding : 20, marginTop : 20, marginBottom : 10 ,  height : 280}
});

class TabPrincipal extends React.Component {
  handleChange = key => (event, value) => {

    this.setState({
      [key]: value,
    });
  };

  render() {
    
    

    return (
      <Grid container spacing={8} >
        <Grid item xs={3}>
         <Paper style={styles.Paper} >
         <CountryImage></CountryImage>
        </Paper>         
        </Grid>
        <Grid item sm>
        <Paper style={styles.Paper} >
            <Options data={store.getState().countries}></Options>
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