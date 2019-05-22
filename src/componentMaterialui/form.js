import React from './node_modules/react';
import Grid from './node_modules/@material-ui/core/Grid';
import Typography from './node_modules/@material-ui/core/Typography';
import TextField from './node_modules/@material-ui/core/TextField';
import Button from './node_modules/@material-ui/core/Button';
import InputAdornment from './node_modules/@material-ui/core/InputAdornment';
import MenuItem from './node_modules/@material-ui/core/MenuItem';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});
const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
function AddressForm() {
  function HandleSaving(){
   console.log('saving'); 
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ingresa un nuevo escritor.
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
       
      
  
        <Grid item xs={12} sm={6}>
         
        <TextField
          select        
          variant="filled"
          label="With Select"        
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
       
      </Grid>
      <Button variant="outlined" color="primary" onClick={HandleSaving} >
        Guardar
      </Button>
     
    </React.Fragment>
  );
}

export default AddressForm;