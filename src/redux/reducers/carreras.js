

const initialState =  {
    carreras : null
}

const carrerasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'VIEW_CAREER':
            
            return {...state,
            carreras : action.payload};
    
        default:
            return state;
    }
}

export default carrerasReducer