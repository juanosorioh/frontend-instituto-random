import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadStudents } from "../redux/actions/personas";

const AlumnosListados = ({alumnos, loadStudents}) => {


  useEffect(() => {
    loadStudents()
  }, []);

  return(
    <div>
      {
        alumnos ? 
        (alumnos.map((element, index) => (
          <div key={index} className="card ">
            <div>
              <div className="card">
              <p>{element.nombre}</p>
                <p>{element.apellido}</p>
              </div>
              <div className="card-body">
                <p>{element.email}</p>
              </div>
            </div>
          </div>
  ))):
        (<h1>no existen alumnos actualmente</h1>)}
    </div>
  )
};

const mapStateToProps = (state) =>{
  return {alumnos : state.alumnos.alumnos}
}

export default connect(mapStateToProps, {loadStudents})(AlumnosListados);
