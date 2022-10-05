import { GET_LOGIN_STATUS, GET_USER_DETAILS, GET_USER_TYPE } from "../reducer/auth/authConstant";
import { toast } from "react-toastify";
import axios from 'axios'

const logOutHandler = (dispatch, navigate) => {
  localStorage.clear()
  dispatch({ type: GET_LOGIN_STATUS });
navigate("/");
toast.success("Logged out Sucessfully!");
}

export const login = async (credentials, dispatch, navigate) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/login`,
        {
          email: credentials.email,
          password: credentials.password,
        }
      );
      const userType = response.data.user[0].userType
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", userType);
      localStorage.setItem("accountNo", response.data.user[0].accountNo)
      dispatch({ type: GET_LOGIN_STATUS });

      if(userType === "user") {
        navigate("/user")
      } else if(userType === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }

      toast.success("Logged In Sucessfully!");
    } catch (err) {
      console.log("Error: ", err?.response);
    }
  };