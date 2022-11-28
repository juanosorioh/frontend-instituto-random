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