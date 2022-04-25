import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const {isAuth,toggleAuth}=useContext(AuthContext)
  toggleAuth()
  return <div></div>;
};
