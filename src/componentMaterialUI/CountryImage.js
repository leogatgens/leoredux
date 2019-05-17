import React from 'react';
import { Typography } from '@material-ui/core';
import store from '../stores/configureStore'

export function CountryImage() { 

  const index = store.getState().indexCountry;
  const {name, flagUrl} = store.getState().countries[index];

  return ( <React.Fragment>
    <img src={flagUrl} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
