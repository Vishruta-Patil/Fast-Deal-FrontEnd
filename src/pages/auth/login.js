import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeroBtn } from "../../components/common/button/HeroBtn";
import { OutlineBtn } from "../../components/common/button/OutlineBtn";
import Header from "../../components/Header";
import { useAuth } from "../../context/authContext";
import { login } from "../../services/auth.service";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const {authState, authDispatch} = useAuth()

const userType = localStorage.getItem("userType")
  useEffect(() => {
  userType === "admin" && navigate("/admin", { replace: true });
  userType === "user" && navigate("/user", { replace: true });
  }, [userType]);


  return (
    <div className="h-screen text-center">
    <section className="">
      <Header />
      <div className="flex flex-col max-w-3xl mx-5 md:mx-auto mt-20 shadow-2xl dark:border-white-neutral dark:border bg-white-neutral dark:bg-dark-background-color">
        <h1 className="text-primary-color mt-5 mb-2 text-3xl font-bold">
          LOGIN
        </h1>
        <p>Please fill in the information below.</p>
        <input
          className="m-3 mx-5 p-2 rounded-lg border-2 dark:bg-dark-highlight-color dark:border-0 dark:text-white-neutral"
          type="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="m-3 mx-5 p-2 rounded-lg border-2 dark:bg-dark-highlight-color dark:border-0 dark:text-white-neutral"
          type="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <HeroBtn
          classnames="m-3 mx-5 mb-7 mt-9 font-semibold"
          eventHandler={() => login(credentials, authDispatch, navigate)}
        >
          Login
        </HeroBtn>
      </div>
    </section>
    </div>
  );
};

export default Login;
