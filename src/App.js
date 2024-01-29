import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.css";
import HorizontalLinearStepper from "./components/Stepper";

function App() {
  return (
    <div id="maincontainer">
      <div id='container'>
      <CssBaseline></CssBaseline>

      <Container>
        <HorizontalLinearStepper></HorizontalLinearStepper>
      </Container>
    </div>
    </div>
  );
}

export default App;
