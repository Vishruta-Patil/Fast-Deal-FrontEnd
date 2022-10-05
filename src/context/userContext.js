import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducer/user/userReducer";

const UserContext = createContext(null)
const useEndUser = () => useContext(UserContext)

const UserProvider = ({children}) => {
    const initialValue = {
        userList: [],
        transactionList: []
    }
  const [userState, userDispatch] = useReducer(userReducer, initialValue);
    return (
        <UserContext.Provider value={{ userState, userDispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export {useEndUser, UserProvider}