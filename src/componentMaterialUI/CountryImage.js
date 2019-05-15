import React from 'react';
import { Typography } from '@material-ui/core';

export function CountryImage(props) { 
  return ( <React.Fragment>
    <img src='http://localhost:3000/img/brazil-flag-button-square-xs.png' alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
