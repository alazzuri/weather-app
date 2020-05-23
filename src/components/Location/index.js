//REACT
import React from "react";

//LIBS
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//STYLES
const useStyles = makeStyles({
  container: {
    backgroundColor: "rgb(220,220,220)",
    border: 0,
    borderRadius: 3,
    height: 70,
    padding: "0 30px",
  },
  title: {
    height: "auto",
    fontSize: "1.5rem",
    fontWeight: 700,
    justifyContent: "center",
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
