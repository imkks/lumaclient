import React, { useContext, useState } from "react";

const AuthContext=React.createContext();
export const useAuth=()=>{
    return useContext(AuthContext);
}
export const AuthProvider=({children})=>{
     const [user, setUser] = useState(null);
     const login=()=>{
         //make api call
         setUser("krishna");
     }
     const logout=()=>{
         setUser(null);
     }
     const value={user,login,logout};
     return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}