import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import IsLogget from "./NavBar/IsLogget";
import { connect } from "react-redux";

const NavBar = ({ token }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/verAnuncios">
            instituto-random
          </Link>

          {token ? (
            
                    <>
                    <Link className="navbar-brand" aria-current="page" to="verAnuncios">
                      Anuncios
                    </Link>
                    <Link className="navbar-brand" aria-current="page" to="verMaterias">
                      Materias
                    </Link>
                    <Link className="navbar-brand" aria-current="page" to="verCarreras">
                      Carreras
                    </Link>
                    <Link className="navbar-brand" aria-current="page" to="verAlumnos">
                      Alumnos
                    </Link>
                    </>
          ) : (
            null
          )}
          <div>
            <IsLogget />
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return { token: state.perfil.token };
};
export default connect(mapStateToProps)(NavBar);
