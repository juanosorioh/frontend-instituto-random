import React, { useState, useEffect } from 'react'
import NavLog from './NavLog';
import NavNoLogget from './NavNoLogget'
import { connect } from 'react-redux';
import Home from '../../pages/Home';

const IsLogget = ({token}) => {
  return (
    <div>
        {token ? (<NavLog/>) : (
          null
)}
    </div>
  )
}

const mapStateToProps = (state) =>{
return {token: state.perfil.token}
}

export default connect(mapStateToProps)(IsLogget)