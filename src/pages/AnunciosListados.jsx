import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { loadPosts } from '../redux/actions/anuncios';


const AnunciosListados = ({anuncios, loadPosts}) => {
const [anuncio, setAnuncio] = useState('');
  const handleChange = (e)=>{
    setAnuncio(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  useEffect(() => {
    loadPosts()
  }, []);
  
  return (
    <>
      <h1>lista anuncios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='anuncio' onChange={handleChange}/>
        <button type="submit">crear</button>
      </form>
      <div>
        {
          anuncios ? 
            (anuncios.map((element, index) => 
              <div className="card" key={index}>
                <div className="card-body">
                  <p>{element.autor.nombre}</p>
                  <p >{element.anuncio}</p>
                </div>
                  <div className="card-footer">
                  {element.comentarios.map((element, index) =>{
                    <p key={index}>{element.comentario}</p>
                  })}
                  </div>
              </div>
            ))
            :(null)
        }
      </div>
    </>
  )
}
const mapStateToProps = (state) =>{
  return {
    anuncios: state.anuncios.list
  }
}

export default connect(mapStateToProps, {loadPosts})(AnunciosListados)