import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <div style={{display: "flex", textAlign: "center", justifyContent: "center"}}>
        <a variant="primary" href="https://github.com/juanosorioh" target="_blank">
          <p className="text-center text-muted">&copy; 2022 JenOs, Inc</p>
        </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
