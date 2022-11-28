import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadCareers } from '../redux/actions/carreras'

const CarrerasListados = ({materias, loadCareers}) => {
  useEffect(() => {
    loadCareers()
  }, []);
  return (
    <div>
      {materias ? (materias.map((element, index) => 
      <div key={index}>
        <p>{element.nombre}</p>
      </div>)):(<h1>No existen carreras agregadas</h1>)}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {carreras : state.carreras.carreras}
}

export default connect(mapStateToProps, {loadCareers})(CarrerasListados)