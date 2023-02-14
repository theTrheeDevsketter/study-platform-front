'use client'

import { AuthState, authTypes } from "./auth.interfaces";


const authReducer = (state : AuthState, action : authTypes):AuthState =>{
    switch(action.type){
        case "Auth - LOGIN":
            return {
                ...state,
                isLogged :true
            }
        case "Auth - LOGOUT":
            return {
                ...state,
                isLogged: false
            }
        case "Auth - SET BEARER":
            return {
                ...state,
                bearer: action.payload
            }
        case "Auth - LOAD":
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}

export {
    authReducer
}