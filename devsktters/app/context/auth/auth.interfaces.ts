import { UserResponse } from "../../../src/interfaces"

interface ContextProps {
    //properties
        isLogged: boolean,
        bearer: Bearer,
        info: UserResponse | null
    
    //methods
        login : (response:any) => void,
        logout : () => void,
        setBearer : (bearer : Bearer ) => void,
        setAuth :(userResponse : UserResponse) => void
}

interface AuthState {
    //properties
    isLogged: boolean,
    bearer: Bearer,
    info: UserResponse | null
}

type Bearer = string | null

type authTypes = 
    | {type : 'Auth - LOGIN'}
    | {type : 'Auth - LOGOUT'}
    | {type : 'Auth - SET BEARER', payload: Bearer}
    | {type : 'Auth - LOAD', payload : UserResponse }
    

export type {
    ContextProps,
    AuthState,
    authTypes,
    Bearer
}