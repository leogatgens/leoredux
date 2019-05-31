import React from 'react';
import { Typography } from '@material-ui/core';


export function CountryImage(props) { 

  

  return ( 

  <React.Fragment>
    <img src={ props.data === null ? null  : props.data.flagUrl} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
