import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import store from '../redux/configureStore'
import * as  actions from '../redux/actions/actions'
const styles = {
  root: {
    flexGrow: 1,
  },
};

class Footer extends React.Component { 
   
  handleChange = (event,index) => { 
  this.props.handleIndexChange(index);
};
  render() {
    const { classes } = this.props;
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.props.selectedIndex}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          
        {
          this.props.data.map((item) =>{
            return  <Tab label={item} key={item} />
          })
        }
        </Tabs>
      </Paper>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

