import React from "react";
import PropTypes from "prop-types";

const ForecastExtended = ({ city }) => {
  return (
    <div>
      <h2 className="card-header mb-2">Pronostico Extendido</h2>
      <h3>{city}</h3>
    </div>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
