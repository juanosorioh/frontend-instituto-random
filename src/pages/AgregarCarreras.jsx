import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { addCareers } from "../redux/actions/carreras";

const initialState = {
  nombre:"", descripcion:"", anio:"", materias:""
}

const CarrerasForm = ({ addCareers}) => {
  const navigate = useNavigate()
const [carrera, setCarrera] = useState(initialState);
  const handleChange = (e)=>{
    setCarrera((prev)=>{return {...prev, [e.target.name]: e.target.value}})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(carrera)
    addCareers(carrera.nombre, carrera.descripcion, carrera.anio, carrera.materias)
    navigate('/dashboard')
  }
  return (
    <>
      <div className="container">
      <h1 style={{textAlign: "center"}}>AgregarCarrera</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row col-auto">
            <div className="form-group col-md-auto">
              <label>Nombre</label>
              <input
                name="nombre"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Descripcion</label>
              <input
                name="descripcion"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Año</label>
              <input
                name="anio"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Materias</label>
              <input
                name="materias"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary btn-lg">
              enviar
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg "
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              volver
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


export default connect(null, {addCareers})(CarrerasForm);
