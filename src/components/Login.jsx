import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  //  use reqres to log user in.
  const {isAuth,toggleAuth}=useContext(AuthContext)
  const navigate=useNavigate()
  const handle = (e) => {
     
    e.preventDefault()
    toggleAuth();
    navigate(-2,{replace:true})

    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
  };
  return (
    <form onSubmit={handle} className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
