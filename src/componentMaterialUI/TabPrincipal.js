import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import {AuthorImage} from './AuthorImage'
import {Options} from './Options'

const styles =  ({
  Paper : {padding : 20, marginTop : 20, marginBottom : 10}
});

class TabPrincipal extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container >
        <Grid item sm>
         <Paper style={styles.Paper}>
         <AuthorImage></AuthorImage>
        </Paper>         
        </Grid>
        <Grid item sm>
        <Paper style={styles.Paper}>
            <Options></Options>
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