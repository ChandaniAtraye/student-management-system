import {createContext} from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
const login = (token) => localStorage.setItem("token", token);
const logout = () => localStorage.removeItem("token");

return(
    <AuthContext.Provider value={{login,logout}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;