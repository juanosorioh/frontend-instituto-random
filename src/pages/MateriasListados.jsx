import React, { useEffect, useState } from "react";
import Album from "../components/Album";
import { connect } from "react-redux";
import { loadMatters } from "../redux/actions/materias";

const MateriasListadas = ({materias, loadMatters}) => {
useEffect(() => {
  loadMatters()
}, []);

  return (
    <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {materias ?
                (materias.map((element, index) => (
                  <div key={index}><Album descripcion={element.descripcion} nombre={element.nombre}/></div>
                ))) : (null)  }
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) =>{
  return {materias : state.materias.materias}
}

export default connect(mapStateToProps, {loadMatters})(MateriasListadas)