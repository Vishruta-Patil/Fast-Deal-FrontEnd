import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { GET_LOGIN_STATUS } from "../../reducer/auth/authConstant";
import { toast } from "react-toastify";

const Header = () => {
  const {authState, authDispatch} = useAuth()
  const navigate = useNavigate()

 const logInHandler = () => {
    navigate("/")
  }

  const logOutHandler = () => {
    localStorage.clear()
    authDispatch({ type: GET_LOGIN_STATUS });
  navigate("/");
  toast.success("Logged out Sucessfully!");
  }
  
  return (
    <div className="p-4 pl-4 pr-9 flex justify-between shadow-md items-center">
      <Link to="/">
        <div className="flex space-x-3 items-center">
          <h1 className="text-primary-color font-roboto font-bold md:text-4xl text-3xl dark:text-white-neutral">
            FAST
            <span className="text-secondary-color md:text-5xl text-4xl dark:text-primary-color">
              D
            </span>
            EAL
          </h1>
        </div>
      </Link>

      <div className="cursor-pointer">
        {!authState.loginStatus ? (
          <div
            className="flex flex-col justify-between items-center text-secondary-color"
            onClick={logInHandler}
          >
            <span className="material-icons icon"> login </span>
            <p>Login</p>
          </div>
        ) : (
          <div
            className="flex-column flex-center secondary-color"
            onClick={logOutHandler}
          >
            <span className="material-icons icon"> logout</span>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
