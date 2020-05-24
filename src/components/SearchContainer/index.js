//REACT
import React, { useState, useEffect } from "react";

//LIBS
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//REDUX
import { setWeatherOnCity, setSavedCity, setCity } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

//STYLES
const styles = () => ({
  container: {
    display: "flex",
    width: "60%",
    margin: "0px auto",
    marginTop: 20,
    marginBottom: 20,
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "rgb(0, 162,183) !important",
    },
  },

  cssFocused: {},

  cssLabel: {
    color: "rgb(0, 162,183) !important",
  },

  notchedOutline: {
    borderWidth: "1px",
  },

  btnContainer: {
    color: "rgb(0, 162,183) !important",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
  },

  searchBtn: {
    backgroundColor: "rgb(0, 162,183) !important",
    color: "white",
    "&:focus": {
      outline: "none",
    },
  },

  btnFocused: {},
});

const SearchBar = ({ classes }) => {
  const [enteredText, setEnteredText] = useState("");
  let savedCities = useSelector((state) => state.savedCities);

  const dispatch = useDispatch();

  const handleSubmit = (e, state) => {
    dispatch(setSavedCity(state.toUpperCase()));
    dispatch(setCity(null));

    if (state && state.length > 2) {
      dispatch(setWeatherOnCity(state.toUpperCase()));
      localStorage.setItem(
        "wheaterApp_savedCities",
        JSON.stringify(savedCities)
      );
    }
    setEnteredText("");
    e.preventDefault();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      const isInside = e.target.closest("form");
      !isInside && setEnteredText("");
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e, enteredText)}
    >
      <TextField
        id="outlined-search"
        label="Busca tu ciudad"
        type="search"
        variant="outlined"
        value={enteredText}
        fullWidth={true}
        onChange={(e) => setEnteredText(e.target.value)}
        InputLabelProps={{
          classes: {
            focused: classes.cssLabel,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <div className={classes.btnContainer}>
        {enteredText ? (
          <Button
            variant="contained"
            type="submit"
            className={classes.searchBtn}
          >
            Search
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Search
          </Button>
        )}
      </div>
    </form>
  );
};

export default withStyles(styles)(SearchBar);
