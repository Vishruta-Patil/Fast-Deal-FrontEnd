import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { GET_LOGIN_STATUS } from "../../reducer/auth/authConstant";
import { toast } from "react-toastify";

const AdminDrawer = () => {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  let activeStyle = {
    color: "#0072FF",
    fontWeight: 700,
  };

  const logOutHandler = () => {
    localStorage.clear();
    authDispatch({ type: GET_LOGIN_STATUS });
    navigate("/");
    toast.success("Logged out Sucessfully!");
    console.log("hello")
  };

  return (
    <div className="p-6 pt-9 text-secondary-color sticky top-5">
      {/* fixed top-20 overflow-hidden h-full  */}
      <div className="flex flex-col text-xl">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="flex space-x-3 items-center mb-7 justify-center">
            <span className="material-icons text-4xl">home</span>
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink
          to="/admin/userlist"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="flex space-x-3 items-center mb-7 justify-center">
            <span className="material-icons text-4xl">group</span>
            <p>Users</p>
          </div>
        </NavLink>

        <NavLink
          to="/admin/transfer"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="flex space-x-3 items-center mb-7 justify-center">
            <span className="material-icons text-4xl">credit_card</span>
            <p>Credit / Debit</p>
          </div>
        </NavLink>

        <div onClick={() => logOutHandler()}>
          <div className="flex space-x-3 items-center justify-center mb-7 cursor-pointer">
            <span className="material-icons text-4xl">logout</span>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawer;
