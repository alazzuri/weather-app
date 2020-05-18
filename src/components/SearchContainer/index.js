import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
    margin: "0px auto",
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
});

const SearchBar = ({ classes }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        label="Busca tu ciudad"
        type="search"
        variant="outlined"
        fullWidth={true}
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
    </form>
  );
};

export default withStyles(styles)(SearchBar);
