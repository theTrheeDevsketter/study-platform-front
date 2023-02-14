'use client';

import { useReducer } from 'react';
import { UserResponse } from '../../../src/interfaces';
import { AuthContext, AuthState, authReducer, Bearer } from './index'


const INIT_AUTH_STATE : AuthState = {
    bearer: null,
    isLogged: false,
    info: null
}

interface Props {
    children: JSX.Element
}

export function AuthProvider({children}:Props,){

    const [state, dispatch] = useReducer(authReducer, INIT_AUTH_STATE)

    const setBearer = (bearer: Bearer) =>{
        dispatch({type:'Auth - SET BEARER', payload:bearer})
    }
    const login = (response: any) => {
        if (response) {
            const bearer = response?.token
            dispatch({type:'Auth - LOGIN'})
        }        
    }

    const logout = () => dispatch({type:'Auth - LOGOUT'})

    const setAuth = ( userResponse : UserResponse ) => dispatch({type:'Auth - LOAD', payload: userResponse})
    

    return(
        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            setBearer,
            setAuth
        }} >
            {children}
        </AuthContext.Provider>
    )
} 