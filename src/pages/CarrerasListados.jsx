import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Album from '../components/Album';
import { loadCareers } from '../redux/actions/carreras'

const CarrerasListados = ({carreras, loadCareers}) => {
  useEffect(() => {
    loadCareers()
  }, []);
  return (
    <div>
      {carreras ?
                (carreras.map((element, index) => (
                  <div key={index}><Album descripcion={element.descripcion} nombre={element.nombre}/></div>
                ))) : (<h1>no existen carreras</h1>)  }
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {carreras : state.carreras.carreras}
}

export default connect(mapStateToProps, {loadCareers})(CarrerasListados)