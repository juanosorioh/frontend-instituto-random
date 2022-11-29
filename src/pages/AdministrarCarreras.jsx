import React from 'react'

const AdministrarCarreras = () => {
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
              <label>año</label>
              <input
                type="text"
                className="form-control"
                //id=""
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label>materias</label>
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
  )
}

export default AdministrarCarreras