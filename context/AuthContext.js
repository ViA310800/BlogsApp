import React, { createContext } from "react";
const AuthContext = createContext();
const AuthProvider = ({children}) =>{
    <AuthContext.Provider>{children}</AuthContext.Provider>
}