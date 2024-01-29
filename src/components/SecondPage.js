import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useStyles } from "./FirstPageCss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

const SecondPage = () => {
  var classes = useStyles();
  var dispatch = useDispatch();

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    var body = { pin: pin, address1: address1, address2: address2, city: city, state: state, country: country }
    console.log('>>>>>>>>>', body);
    setAddress1('');
    setAddress2('');
    setCity('');
    setState('');
    setCountry('');
    setPin('');
    dispatch({ type: 'ADD_USER2', payload: ['user_second_data', body] })
  }

  return (
    <Grid container className={classes.gridStyle} spacing={2}>
      <Grid item xs={6}>
        <TextField fullWidth label="Address Line 1" onChange={(event) => setAddress1(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Address Line 2" onChange={(event) => setAddress2(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(event) => setCity(event.target.value)}
            label="City"
          >
            <MenuItem value={'Gwalior'}>Gwalior</MenuItem>
            <MenuItem value={'Bhopal'}>Bhopal</MenuItem>
            <MenuItem value={'Indore'}>Indore</MenuItem>
            <MenuItem value={'Dewas'}>Dewas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(event) => setState(event.target.value)}
            label="State"
          >
            <MenuItem value={'Madhya Pradesh'}>Madhya Pradesh</MenuItem>
            <MenuItem value={'Uttar Pradesh'}>Uttar Pradesh</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
            <MenuItem value={'Rajasthan'}>Rajasthan</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(event) => setCountry(event.target.value)}
            label="country"
          >
            <MenuItem value={'India'}>India</MenuItem>
            <MenuItem value={'Australia'}>Australia</MenuItem>
            <MenuItem value={'Bangladesh'}>Bangladesh</MenuItem>
            <MenuItem value={'Pakistan'}>Pakistan</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Pin Code" onChange={(event) => setPin(event.target.value)} variant="outlined" />
      </Grid>

      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default SecondPage;
