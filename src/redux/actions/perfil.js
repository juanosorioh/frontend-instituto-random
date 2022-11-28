import axios from "axios"
import { LOGIN, LOGOUT, STATE } from "./types"

export const login = (email, password)=>{
    return async (dispatch) =>{
        const body = JSON.stringify({email, password})
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post('/back/auth/login',body, config)
            dispatch({type: LOGIN, payload: {perfil: response.data.persona, token: response.data.token}})
            localStorage.setItem('token',response.data.token)
        } catch (error) {
            console.log(error)
        }
    }
}

export const verify = (token)=>{
    return async (dispatch) => {
        try {
            const response = await axios.get('/back/auth/verify', {headers: {token}})
            dispatch({type: LOGIN, payload: {perfil: response.data.persona, token}})
        } catch (error) {
            console.log(error)
        }
    }
}
export const states = (token)=>{
    return async (dispatch) => {
        try {
            dispatch({type: STATE, payload: {token: token}})
        } catch (error) {
            console.log(error)
        }
    }
}

export const logout = () =>{
    return async (dispatch) =>{
        try {
            dispatch({type: LOGOUT, payload: {token: ""}})
        } catch (error) {
            console.log(error)
        }
    }
}

/* export const state =() =>{
    return async(dispatch) =>{
        try {
            const response = await axios.get('/back/auth/verify', {headers: {token}})
            dispatch({type: STATE, payload: {token: response.data.token}})
        } catch (error) {
            console.log(error)
        }
    }
} */