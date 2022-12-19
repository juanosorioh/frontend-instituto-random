import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../redux/actions/anuncios";

const initialState = {
  autor:"", fecha:"", anuncio:""
}

const AnunciosForm = ({addPost}) => {
  const navigate = useNavigate()
  const [anuncio, setAnuncio] = useState(initialState);
    const handleChange = (e)=>{
      setAnuncio((prev)=>{return {...prev, [e.target.name]: e.target.value}})
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      console.log(anuncio)
      addPost(anuncio.autor, anuncio.fecha, anuncio.descripcion)
      navigate('/dashboard')
    }
  
  return (
    <>
      <div className="container">
      <h1 style={{textAlign: "center"}}>Agregar Anuncio</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row col-auto">
            <div className="form-group col-md-auto">
              <label>Autor</label>
              <input
              name="autor"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-auto">
              <label>fecha</label>
              <input
              name="fecha"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-auto">
              <label>anuncio</label>
              <input
              name="anuncio"
                type="text"
                className="form-control"
                //id=""
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit"  className="btn btn-primary btn-lg">
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


export default connect(null, {addPost})(AnunciosForm);
