import { createContext, useState } from "react";
export const AuthContext=createContext()


export const AuthContextProvider=({children})=>{
    const [isAuth,setisAuth]=useState(false)
    const toggleAuth=()=>{
       setisAuth((v)=>{
           return !v
       })
    }
    return (<AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>)
}
