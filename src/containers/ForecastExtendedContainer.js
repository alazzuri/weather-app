import React from "react";
import ForecastExtended from "../components/ForecastExtended";
import { useSelector } from "react-redux";

const ForecastExtendedContainer = () => {
  const selectedCity = useSelector((state) => state.selectedCity);

  return selectedCity ? (
    <ForecastExtended className="w-100" city={selectedCity} />
  ) : (
    <div className="forecast">
      <h2 className="card-header mb-2">Pronostico Extendido</h2>
      <h3>Seleccione ciudad</h3>
    </div>
  );
};

export default ForecastExtendedContainer;
