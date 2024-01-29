
import React, { useState } from "react";
//import * as useState from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";


const steps = ['USER INFORMATION', 'ADDRESS DETAILS', 'THANK YOU'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] =useState(0);

  const[userdata,setuserdata]=useState([])
  const[finaldata,setfinaldata]=useState([]);
  

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

   

  

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          <h2>DATA ADDED SUCCESSFULLY</h2>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep===0 &&<FirstPage></FirstPage>}
           {activeStep===1 && <SecondPage></SecondPage>}
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0 && activeStep===2}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
           
            

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'ye'  : 'Next'}
             
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
