import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Codeado con <i className="fas fa-heart"></i> por Alexis Lazzuri
      </p>

      <a
        href="https://github.com/alazzuri"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        <i className="fab fa-github-alt fa-lg"></i> github.com/alazzuri
      </a>
    </footer>
  );
};

export default Footer;
