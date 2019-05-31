import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CountryImage} from './CountryImage';
import {Options} from './Options';
import Button from '@material-ui/core/Button';
import * as  actions from '../redux/actions/actions';
import {connect} from 'react-redux'

const styles =  ({
  Paper : {padding : 20, marginTop : 20, marginBottom : 10 ,  height : 300}
});

class TabPrincipal extends React.Component {  

  state = {
    countriesToShow: [],
    indexCountry: 0,
    selectedTabIndex: 0
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleSelectedCountry = (event) => {
    
    this.props.dispatch(actions.CambiarFondo(event));
  }

  handleNext = () => {
      let algo = this.props.mapProps.countryreducer.selectedTabIndex;
   this.props.dispatch(actions.nextCountry(algo));
   // this.props.dispatch(actions.fetchPosts());
  }
  render() {    
    
    const index = this.props.mapProps.countryreducer.indexCountry;
    const  flagUrl = this.props.mapProps.countryreducer.countriesToShow[index];
    const countriesToShow = this.props.mapProps.countryreducer.countriesToShow; 
    const  actualCountry = countriesToShow[index];

    return (
      <Grid container spacing={8} >
        <Grid item xs={3}>
         <Paper style={styles.Paper} >
         <CountryImage data = {flagUrl}></CountryImage>
        </Paper>         
        </Grid>
        <Grid item sm>
         <Paper style={styles.Paper} >
            <Options data={countriesToShow} handleSelectedCountry={this.handleSelectedCountry} actualCountry={actualCountry}></Options>
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
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state,ownProps){
  return {
    mapProps : state
  };
}
export default connect(mapStateToProps )(withStyles(styles)(TabPrincipal));