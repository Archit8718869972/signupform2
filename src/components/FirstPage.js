import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useStyles } from "./FirstPageCss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";

const FirstPage = () => {
  var classes = useStyles();
  var dispatch = useDispatch();

  const [emailId, setEmailId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setlastName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [marital, setMarital] = useState('Single')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [blood, setBlood] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('female')
  const [age, setAge] = useState('')

  const handleSubmit = () => {
    var body = { mobilenumber: mobileNo, age: age, emailid: emailId, firstname: firstName, middlename: middleName, lastname: lastName, marital: marital, blood: blood, height:height, weight: weight,dob: dob, gender: gender }
    console.log('>>>>>>>>>', body);
    setGender('female');
    setDob('');
    setBlood('');
    setHeight('');
    setWeight('');
    setMarital('Single');
    setMobileNo('');
    setlastName('');
    setMiddleName('');
    setFirstName('');
    dispatch({ type: 'ADD_USER1', payload: ['user_first_data', body] })
  }

  return (
    <Grid container className={classes.gridStyle} spacing={2}>
      <Grid item xs={6}>
        <TextField fullWidth onChange={(event) => setFirstName(event.target.value)} label="First Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth onChange={(event) => setMiddleName(event.target.value)} label="Middle Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth onChange={(event) => setlastName(event.target.value)} label="Second Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth onChange={(event) => setMobileNo(event.target.value)} label="Mobile No" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Email" onChange={(event) => setEmailId(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="someDate"
          label="Birthday"
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          fullWidth
          onChange={(event) => setDob(event.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Age" onChange={(event) => setAge(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Blood Group"
            onChange={(event) => setBlood(event.target.value)}
          >
            <MenuItem value={10}>A</MenuItem>
            <MenuItem value={20}>A++</MenuItem>
            <MenuItem value={30}>B</MenuItem>
            <MenuItem value={30}>B++</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Height" onChange={(event) => setHeight(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Weight" onChange={(event) => setWeight(event.target.value)} variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <div style={{ fontSize: 14 }}>Gender</div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <div style={{ fontSize: 14 }}>Marital Status</div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group1"
            value={marital}
            onChange={(event) => setMarital(event.target.value)}
          >
            <FormControlLabel
              value="Single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="Married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="Divorced"
              control={<Radio />}
              label="Divorced"
            />
            <FormControlLabel
              value="Widowed"
              control={<Radio />}
              label="Widowed"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Next</Button>
      </Grid>

    </Grid>
  );
};

export default FirstPage;
