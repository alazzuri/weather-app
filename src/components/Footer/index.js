import React from "react";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  return (
    <footer>
      <Typography align="center">
        Hecho con <i class="fas fa-heart" style={{ color: "red" }}></i> por
        Alexis Lazzuri
      </Typography>
    </footer>
  );
};

export default Footer;
