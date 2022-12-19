import axios from "axios";
import { VIEW_CAREER } from "./types";

export const loadCareers = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('/back/administrativos/mostrarCarreras')
            dispatch({type: VIEW_CAREER, payload : [...response.data.carreras]})
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCareers = (nombre, descripcion, anio, materias)=>{
    return async () =>{
        const body = JSON.stringify({nombre, descripcion, anio, materias})
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post('/back/administrativos/agregarCarrera',body, config)
            console.log(response.data)
            //dispatch({type: ADD_CAREER, payload: {carreras: response.data} })
        } catch (error) {
            console.log(error)
        }
    }
}


