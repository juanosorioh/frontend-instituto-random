import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Routing from "./Routing";
import { connect } from "react-redux";
import {useEffect, useState} from 'react'
import { verify } from "./redux/actions/perfil";

function App({reduxToken, verify}) {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) return
    verify(token)
  }, []);
  return (
      <div className="App">
        <NavBar/>
        <Routing/>
        <Footer/>
      </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    reduxToken: state.perfil.token
  }

}

export default connect(mapStateToProps, {verify})(App);
