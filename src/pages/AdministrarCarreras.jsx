import React from "react";
import { useNavigate } from "react-router-dom";

const AdministrarCarreras = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
      <h1 style={{textAlign: "center"}}>Administrar Carreras</h1>
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
              <label>año</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>materias</label>
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

export default AdministrarCarreras;
