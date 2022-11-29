import React from "react";
import { Link } from "react-router-dom";

const DashboardPanel = () => {
    const listStyle = {
        margin: "0px 0px 10px 0px"
      }
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse"
    >
      <div
        className="position-sticky pt-3"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <ul className="nav flex-column">
          <li className="nav-item" style={listStyle}>
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/AgregarAnuncios"}
            >
              <span data-feather=""></span>
              Agregar Anuncio
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link className="nav-link" to={"/AgregarMaterias"}>
              <span data-feather=""></span>
              Agregar Materia
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link className="nav-link" to={"/AgregarCarreras"}>
              <span data-feather=""></span>
              Agregar Carrera
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link className="nav-link" to={"/adminPersona"}>
              <span data-feather=""></span>
              Administrar Persona
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link className="nav-link" to={"/adminMateria"}>
              <span data-feather=""></span>
              Administrar Materias
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link className="nav-link" to={"/adminCarrera"}>
              <span data-feather=""></span>
              Administrar Carreras
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardPanel;
