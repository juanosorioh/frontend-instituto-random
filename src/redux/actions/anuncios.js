import axios from 'axios'
import {LOAD_POSTS} from './types'

export const loadPosts = () => {
    return async (dispatch) =>{
        try {
            
            const response = await axios.get('/back/administrativos/mostrarAnuncios')
            dispatch({type : LOAD_POSTS, payload: [...response.data.anuncios]})
        } catch (error) {
            console.log(error)
        }
    } 
}

export const addPost = (autor, fecha, anuncio)=>{
    return async () =>{
        const body = JSON.stringify({autor, fecha, anuncio})
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post('/back/administrativos/agregarAnuncio',body, config)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}
