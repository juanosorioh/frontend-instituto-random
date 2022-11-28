import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadStudents } from "../redux/actions/personas";

const Table = ({alumnos, loadStudents}) => {
  useEffect(() => {
    loadStudents();
  }, []);
  return (
    <div>
      <div className="container">
        <h2>personas</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">nombre</th>
                <th scope="col">apellido</th>
                <th scope="col">telefono</th>
                <th scope="col">rol</th>
                <th scope="col">acciones</th>
              </tr>
            </thead>
            <tbody >
            {alumnos
              ? alumnos.map((element, index) => (
                  <tr key={index}>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                    <td>{element.telefono}</td>
                    {element.perfiles.map((element, index)=>(
                      <td key={index}>{element.rol}</td>
                    ))}
                    <td>
                      <button className="btn btn-warning">modificar</button>
                      <button className="btn btn-danger">borrar</button>
                    </td>
                  </tr>
                ))
              : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { alumnos: state.alumnos.alumnos };
};

export default connect(mapStateToProps, { loadStudents })(Table);
