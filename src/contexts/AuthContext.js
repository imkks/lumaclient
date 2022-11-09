import React, { useContext, useState } from "react";

const AuthContext=React.createContext();
export const useAuth=()=>{
    return useContext(AuthContext);
}
export const AuthProvider=({children})=>{
     const [user, setUser] = useState(null);
     const login=(employeeId,password)=>{
         //make api call
         let raw = JSON.stringify({
            "employeeId": employeeId,
            "password": password
          });
          
          let requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
          };
         
            
          fetch("localhost:8085/luma/login", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);setUser("krishna");})
  .catch(error => console.log('error', error));
          
         
     }
     const logout=()=>{
         setUser(null);
     }
     const value={user,login,logout};
     return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}