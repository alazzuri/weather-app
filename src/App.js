import React from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchBar from "./components/SearchContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import Footer from "./components/Footer";
import LocationListContainer from "./containers/LocationListContainer";
import { Logo } from "./assets";

function App() {
  return (
    <div>
      <AppBar position="sticky" className="main-header bg-info">
        <Toolbar>
          <img src={Logo} alt="Logo" className="main-logo" />
          <Typography variant="h4" color="inherit" className="h1">
            The Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className="App container-fluid">
        <Row className="mb-3"></Row>
        <Row className="search-container">
          <SearchBar />
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
    </div>
  );
}

export default App;
