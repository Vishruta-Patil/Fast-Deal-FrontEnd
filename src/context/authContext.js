import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/auth/authReducer";

const AuthContext = createContext(null)
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const initialValue = {
        userType: "",
        loginStatus: localStorage.getItem("token") !== null,
        token: ""
    }
  const [authState, authDispatch] = useReducer(authReducer, initialValue);
    return (
        <AuthContext.Provider value={{ authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}