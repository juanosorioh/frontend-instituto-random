import {LOAD_POSTS} from '../actions/types'

const initialState = {
    list: null,
}

const anunciosReducer = (state = initialState, action)=>{
    switch (action.type) {
        case LOAD_POSTS:
            
            return {...state,
            list: action.payload}
    
        default:
            return state
    }
}

export default anunciosReducer