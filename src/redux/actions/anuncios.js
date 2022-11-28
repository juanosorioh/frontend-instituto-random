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