import { VIEW_STUDENTS } from "../actions/types";

const initialState = {
    alumnos: null
}

const personasReducer = (state = initialState, action) =>{
    switch (action.type) {
        case VIEW_STUDENTS:
            
            return {...state,
            alumnos : action.payload};
    
        default:
            return state;
    }
}

export default personasReducer