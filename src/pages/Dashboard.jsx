import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/formAnuncios"}>
                    <span data-feather=""></span>
                    Agregar Anuncio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/formMaterias"}>
                    <span data-feather=""></span>
                    Agregar Materia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/formCarreras"}>
                    <span data-feather=""></span>
                    Agregar Carrera
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    <span data-feather=""></span>
                    Administrar Persona
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    <span data-feather=""></span>
                    Administrar anuncios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    <span data-feather=""></span>
                    Administrar Materias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    <span data-feather=""></span>
                    Administrar Carreras
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
            {/* --------------------------------------------------------------------------------- */}
            <Table />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
