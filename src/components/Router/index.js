import { Navigate, Route, Routes } from "react-router-dom";
import { CreditDebitAdmin } from "../../pages/admin/CreditDebit";
import { AdminPage } from "../../pages/admin/Home";
import { AdminUserList } from "../../pages/admin/Users";
import Login from "../../pages/auth/login";
import { UserPage } from "../../pages/user/Home";
import { UserTransaction } from "../../pages/user/Transaction";
import { UserTransfer } from "../../pages/user/Transfer";

export const Router = () => {
  const useAuth = () => {
    const user_data = localStorage.getItem("token");
    return user_data !== null;
  };

  const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/transaction"
        element={
          <PrivateRoute>
            <UserTransaction />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/transfer"
        element={
          <PrivateRoute>
            <UserTransfer />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/userlist"
        element={
          <PrivateRoute>
            <AdminUserList />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/transfer"
        element={
          <PrivateRoute>
            <CreditDebitAdmin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
