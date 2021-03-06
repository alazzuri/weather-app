//REACT
import React from "react";

//STYLES
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
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
      </div>
    </footer>
  );
};

export default Footer;
