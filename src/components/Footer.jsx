import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <a variant="primary" href="https://github.com/juanosorioh" target="_blank" style={{cursor: "pointer", }}>
          <p className="text-center text-muted">&copy; 2022 JenOs, Inc</p>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
