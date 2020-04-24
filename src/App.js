import React, { useState } from "react";
import "./App.css";
import LocationList from "./components/LocationList";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ForecastExtended from "./components/ForecastExtended";
import { Card } from "@material-ui/core";

import Footer from "./components/Footer";

const cities = [
  "Cordoba, ar",
  "Buenos Aires, ar",
  "Miami, us",
  "Madrid, es",
  "Ciudad de Mexico, mx",
];

const initialState = {
  cities,
  selectedCity: null,
};

function App() {
  const [state, setState] = useState(initialState);
  const { cities, selectedCity } = state;

  const handleSelectedLocation = (city) => {
    setState({ ...state, selectedCity: city });
  };

  return (
    <Grid className="App">
      <Row className="mb-3">
        <AppBar position="sticky" className="bg-info mt-2">
          <Toolbar>
            <Typography variant="h4" color="inherit" className="h1">
              The Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <LocationList
            cities={cities}
            onSelectedLocation={handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Paper elevation={4}>
            <Card className="card h-100">
              <ForecastExtended city={selectedCity} />
            </Card>
          </Paper>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
}

export default App;
