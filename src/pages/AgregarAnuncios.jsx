import React from "react";
import { useNavigate } from "react-router-dom";

const AnunciosForm = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container">
      <h1 style={{textAlign: "center"}}>Agregar Anuncio</h1>
        <form>
          <div className="form-row col-auto">
            <div className="form-group col-md-auto">
              <label>Autor</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>fecha</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-auto">
              <label>anuncio</label>
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

export default AnunciosForm;
