import React from 'react';
import { Typography } from '@material-ui/core';
import store from '../stores/configureStore'

export function CountryImage() { 
  return ( <React.Fragment>
    <img src={store.getState().imageUrl} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
