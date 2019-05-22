import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import store from '../stores/configureStore'
import { ActionTypes as types} from '../ActionTypes';
const styles = {
  root: {
    flexGrow: 1,
  },
};

class Footer extends React.Component {  
  handleChange = (event,index) => { 
    store.dispatch({
      type: types.REQUEST_COUNTRIES_BY_CONTINENT,
      data: index
     }); 
};
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={store.getState().selectedTabIndex}
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

