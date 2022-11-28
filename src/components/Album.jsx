import React from "react";
import { useNavigate } from "react-router-dom";

const Album = (props) => {

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-text"></h3>
          <div className="d-flex justify-content-between align-items-center">
            <div className="card-body">
              <h3>{props.nombre}</h3>
              <p>{props.descripcion}</p>
            </div>
          </div>
          <div>
           {/*  <button type="button" className="btn btn-success" onClick={()=>{}}>
              editar
            </button>
            <button type="button" className="btn btn-danger">
              Borrar
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
