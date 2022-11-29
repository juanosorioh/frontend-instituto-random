import React from "react";

const PersonaForm = () => {
  return (
    <>
      <div className="">
        <form>
          <div className="form-row col-auto">
            <div className="form-group col-md-6">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Apellido</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                //id="inputPassword4"
                placeholder="Password"
              />
            </div>
            <div className="form-group col-md-6">
              <label>birthdate</label>
              <input
                type="date"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>DNI</label>
              <input
                type="number"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Telefono</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Rol</label>
              <select id="inputState" className="form-control">
                <option value={3}>Alumno</option>
                <option value={1}>Profesor</option>
                <option value={2}>Administrativo</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Carrera</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>Datos</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonaForm;
