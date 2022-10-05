import { createContext, useContext, useReducer } from "react";
import { adminReducer } from "../reducer/admin/adminReducer";

const AdminContext = createContext(null);
const useAdmin = () => useContext(AdminContext);

const AdminProvider = ({ children }) => {
  const initialValue = {
    totalBankAmount: 0
  };
  const [adminState, adminDispatch] = useReducer(adminReducer, initialValue);
  return (
    <AdminContext.Provider value={{ adminState, adminDispatch }}>
      {children}
    </AdminContext.Provider>
  );
};

export { useAdmin, AdminProvider };
