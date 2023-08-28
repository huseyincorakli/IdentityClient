import { createContext, useState,useContext } from "react";

interface IAuthContext{
    token:string;
    setToken:React.Dispatch<React.SetStateAction<string>>;
}


const AuthContext = createContext<IAuthContext>({
    token:'',
    setToken:()=>{}
});

export  const AuthProvider = ({children})=>{
const [token,setToken]=useState();

  
const data = {
   
    token,setToken
}

    return (    
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)
