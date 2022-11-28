import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/perfil';
import { connect } from 'react-redux';

const NavLog = ({token, logout}) => {
  const navigate = useNavigate()
  const salir = ()=>{
    logout()
    navigate('/login')
    //location. reload()
  }
  const panel = () =>{
    navigate('/dashboard')
  }
  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
        <button className="btn btn-success me-md-2" type="button" onClick={panel}>
          Panel de control
        </button>
        <button className="btn btn-danger me-md-2" type="button" onClick={salir}>
          cerrar sesion
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {token: state.perfil.token}
}

export default connect(mapStateToProps, {logout})(NavLog)