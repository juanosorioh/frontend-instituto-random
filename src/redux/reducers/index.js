import {combineReducers} from 'redux'
import anunciosReducer from './anuncios'
import perfilReducer from './perfil'
import materiasReducer from './materias'
import carrerasReducer from './carreras' 
import personasReducer from './personas'

export default combineReducers({
    anuncios: anunciosReducer,
    perfil: perfilReducer,
    materias: materiasReducer,
    carreras: carrerasReducer,
    alumnos : personasReducer
})