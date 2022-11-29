import React from "react";
import { useNavigate } from 'react-router-dom'

const PersonaForm = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
      <h1 style={{textAlign: "center"}}>Agregar Persona</h1>
        <form>
          <div className="form-row col-auto">
            <div className="form-group col-md-auto">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Apellido</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                //id="inputPassword4"
                placeholder="Password"
              />
            </div>
            <div className="form-group col-md-auto">
              <label>birthdate</label>
              <input
                type="date"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>DNI</label>
              <input
                type="number"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Telefono</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Rol</label>
              <select id="inputState" className="form-control">
                <option value={3}>Alumno</option>
                <option value={1}>Profesor</option>
                <option value={2}>Administrativo</option>
              </select>
            </div>
            <div className="form-group col-md-auto">
              <label>Carrera</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>Datos</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="button" className="btn btn-primary btn-lg">
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

export default PersonaForm;
