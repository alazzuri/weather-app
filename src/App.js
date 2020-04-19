import React from "react";
import "./App.css";
import LocationList from "./components/LocationList";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const cities = [
  "Cordoba, ar",
  "Buenos Aires, ar",
  "Miami, us",
  "Madrid, es",
  "Ciudad de Mexico, mx",
];

function App() {
  const handleSelectedLocation = (city) => {
    console.log("Selected" + city);
  };

  return (
    <Grid className="App">
      <Row className="mb-2">
        <AppBar position="sticky" className="bg-info mt-2">
          <Toolbar>
            <Typography variant="title" color="inherit" className="h1">
              The Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities}
            onSelectedLocation={handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4} className="h-100">
            <div className="card bg-info h-100"></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
