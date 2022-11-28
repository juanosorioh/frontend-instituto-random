import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
    token: null,
    perfil: null,
}

const perfilReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                perfil :action.payload.perfil,
                token: action.payload.token
            };
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                perfil: null,
                token: null
            };
     
    
        default:
            return state;
    }
}

export default perfilReducer