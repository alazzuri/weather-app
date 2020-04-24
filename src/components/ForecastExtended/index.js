import React, { useState } from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";
import { fakeData } from "../../constants/api_url";

import ForecastLoader from "../ContentLoaders/ForecastLoader";

const days = ["lunes", "martes", "miercoles", "jueves", "viernes"];

const initialState = {
  data: null,
};

const ForecastExtended = ({ city }) => {
  const [state, setstate] = useState(initialState);
  const { data } = state;

  const renderForecastDays = (days) =>
    days.map((day) => <ForecastItem weekDay={day} hour={10} data={fakeData} />);

  return (
    <div>
      {city ? (
        data ? (
          <div>
            <h2 className="card-header mb-2">Pronostico Extendido</h2>
            <h3>{city}</h3>
            {renderForecastDays(days)}
          </div>
        ) : (
          <ForecastLoader items={days} />
        )
      ) : (
        <div>
          <h2 className="card-header mb-2">Pronostico Extendido</h2>
          <h3>Seleccione ciudad</h3>
        </div>
      )}
    </div>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
