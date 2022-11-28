import { VIEW_SUBJECT_MATTER } from "../actions/types"


const initialState = {
    materias: null
}

const materiasReducer = (state = initialState, action) =>{
    switch (action.type) {
        case VIEW_SUBJECT_MATTER:
            return {
                ...state,
                materias: action.payload
            }
    
        default:
            return state
    }
}

export default materiasReducer