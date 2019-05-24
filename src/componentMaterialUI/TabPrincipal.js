import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CountryImage} from './CountryImage';
import {Options} from './Options';
import store from '../stores/configureStore';
import Button from '@material-ui/core/Button';
import * as  actions from '../actions/actions';

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
 
    store.dispatch(actions.nextCountry(store.getState().todos.selectedTabIndex));
  }



  render() {
 
    
    const index = store.getState().todos.indexCountry;
    const  flagUrl = store.getState().todos.countriesToShow[index];

    return (
      <Grid container spacing={8} >
        <Grid item xs={3}>
         <Paper style={styles.Paper} >
         <CountryImage data = {flagUrl}></CountryImage>
        </Paper>         
        </Grid>
        <Grid item sm>
         <Paper style={styles.Paper} >
            <Options data={store.getState().todos.countriesToShow}></Options>
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