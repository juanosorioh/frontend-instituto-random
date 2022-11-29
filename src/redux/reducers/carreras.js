import { VIEW_CAREER, ADD_CAREER } from "../actions/types";

const initialState =  {
    carreras : null
}

const carrerasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case VIEW_CAREER:
            
            return {...state,
            carreras : action.payload};


       /*  case ADD_CAREER:
            
            return {...state,
            carreras :action.payload.carreras}; */
    
        default:
            return state;
    }
}

export default carrerasReducer