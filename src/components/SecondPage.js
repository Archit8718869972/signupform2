import * as React from "react";
import { TextField, Grid } from "@mui/material";
import { useStyles } from "./FirstPageCss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SecondPage = () => {
  var classes = useStyles();
  return (
    <Grid container className={classes.gridStyle} spacing={2}>
      <Grid item xs={6}>
        <TextField fullWidth label="Address Line 1" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Address Line 2" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="City"
          >
            <MenuItem value={10}>Gwalior</MenuItem>
            <MenuItem value={20}>Bhopal</MenuItem>
            <MenuItem value={30}>Indore</MenuItem>
            <MenuItem value={30}>Dewas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="State"
          >
            <MenuItem value={10}>Madhya Pradesh</MenuItem>
            <MenuItem value={20}>Uttar Pradesh</MenuItem>
            <MenuItem value={30}>Hyderabad</MenuItem>
            <MenuItem value={30}>Rajasthan</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="country"
          >
            <MenuItem value={10}>India</MenuItem>
            <MenuItem value={20}>Australia</MenuItem>
            <MenuItem value={30}>Bangladesh</MenuItem>
            <MenuItem value={30}>Pakistan</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Pin Code" variant="outlined" />
      </Grid>
    </Grid>
  );
};

export default SecondPage;
