import React from "react";
import { TextField, Grid } from "@mui/material";
import { useStyles } from "./FirstPageCss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const FirstPage = () => {
  var classes = useStyles();

  //const [firstData, setFirstData] = useState({})
  return (
    <Grid container className={classes.gridStyle} spacing={2}>
      <Grid item xs={6}>
        <TextField fullWidth label="First Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Middle Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Second Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Mobile No" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Email" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="someDate"
          label="Birthday"
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Age" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Blood Group"
          >
            <MenuItem value={10}>A</MenuItem>
            <MenuItem value={20}>A++</MenuItem>
            <MenuItem value={30}>B</MenuItem>
            <MenuItem value={30}>B++</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Height" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Weight" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <div style={{ fontSize: 14 }}>Gender</div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={gender}
            // onChange={(event) => setGender(event.target.value)}
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
            // value={gender}
            // onChange={(event) => setGender(event.target.value)}
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
    </Grid>
  );
};

export default FirstPage;
