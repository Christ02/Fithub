import { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");

    useEffect(()=>{
        if (localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        // Otras acciones de logout, como redirigir al usuario al login
      };

    const contextValue = {
        url,
        token,
        setToken,
        logout
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}  {/* Esto permite que los componentes hijos usen el contexto */}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
