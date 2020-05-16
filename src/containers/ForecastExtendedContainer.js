import React from "react";
import ForecastExtended from "../components/ForecastExtended";
import { useSelector } from "react-redux";
import { Card, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const ForecastExtendedContainer = () => {
  const selectedCity = useSelector((state) => state.selectedCity);

  return selectedCity ? (
    <ForecastExtended className="w-100" city={selectedCity} />
  ) : (
    <Paper elevation={4}>
      <Card className="card">
        <div className="forecast">
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
          <h3>Seleccione ciudad</h3>
          <Divider />
        </div>
      </Card>
    </Paper>
  );
};

export default ForecastExtendedContainer;
