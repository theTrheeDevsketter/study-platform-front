
interface ContextProps {
    //properties
        isLogged: boolean,
        bearer: Bearer,
    
    
    //methods
        login : (response:any) => void,
        logout : () => void,
        setBearer : (bearer : Bearer ) => void,
}

interface AuthState {
    //properties
    isLogged: boolean,
    bearer: Bearer,
}

type Bearer = string | null

type authTypes = 
    | {type : 'Auth - LOGIN'}
    | {type : 'Auth - LOGOUT'}
    | {type : 'Auth - SET BEARER', payload: Bearer}
    

export type {
    ContextProps,
    AuthState,
    authTypes,
    Bearer
}