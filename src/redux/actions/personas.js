import axios from "axios";
import { VIEW_STUDENTS } from "./types";

export const loadStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/back/administrativos/mostrarAlumnosActivos')
      dispatch({ type: VIEW_STUDENTS, payload: [...response.data.alumnos] });
    } catch (error) {
      console.log(error);
    }
  }
}
