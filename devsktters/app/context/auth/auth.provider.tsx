'use client';

import { useReducer } from 'react';
import { AuthContext, AuthState, authReducer, Bearer } from './index'


const INIT_AUTH_STATE : AuthState = {
    bearer: null,
    isLogged: false
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

    

    return(
        <AuthContext.Provider value={{
            ...state,
            login,
            logout,
            setBearer,
        }} >
            {children}
        </AuthContext.Provider>
    )
} 