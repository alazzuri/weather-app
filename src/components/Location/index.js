import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgb(220,220,220)",
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
  },
});

const Location = ({ city }) => {
  const classes = useStyles();
  return (
    <CardHeader
      className={classes.container}
      title={<Typography className={classes.title}>{city}</Typography>}
    ></CardHeader>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
