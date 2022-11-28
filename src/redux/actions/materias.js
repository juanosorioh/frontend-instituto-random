import axios from "axios";
import { VIEW_SUBJECT_MATTER } from "./types";

export const loadMatters = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('/back/administrativos/mostrarMaterias')
            dispatch({type: VIEW_SUBJECT_MATTER, payload:[...response.data.materias]})
        } catch (error) {
            console.log(error)
        }
    }
}