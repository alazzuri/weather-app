import React from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import Footer from "./components/Footer";
import LocationListContainer from "./containers/LocationListContainer";

function App() {
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
          <LocationListContainer />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <ForecastExtendedContainer />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
}

export default App;
