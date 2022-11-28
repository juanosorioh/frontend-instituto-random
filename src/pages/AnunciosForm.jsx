import React from 'react'

const AnunciosForm = () => {
  return (
    <>
          <div className="">
      <form>
      <div className="form-row col-auto">
        <div className="form-group col-md-6">
          <label>Autor</label>
          <input
            type="text"
            className="form-control"
            //id=""
            placeholder=""
          />
        </div>
        <div className="form-group col-md-6">
          <label>fecha</label>
          <input
            type="text"
            className="form-control"
            //id=""
            placeholder=""
          />
        </div>
        <div className="form-group col-md-6">
          <label>anuncio</label>
          <input
            type="text"
            className="form-control"
            //id=""
            placeholder=""
          />
        </div>
        
      </div>
      <button type="submit" className="btn btn-primary">enviar</button>
    </form>
      </div></>
  )
}

export default AnunciosForm