'use client';

import { createContext } from "react";
import { ContextProps } from "./auth.interfaces";

const AuthContext = createContext({} as ContextProps);

AuthContext.displayName = 'AuthContext'


export {
    AuthContext
}

