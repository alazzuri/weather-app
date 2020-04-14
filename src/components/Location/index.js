import React from "react";
import PropTypes from "prop-types";

const Location = ({ city }) => {
  return (
    <div className="card-header">
      <h1 className="text-dark">{city}</h1>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
