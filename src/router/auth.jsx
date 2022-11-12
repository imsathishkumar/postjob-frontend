
import { Navigate, Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { UserContext} from "../App";

function AuthLayout(props) {
  const [user , setUser] = useContext(UserContext);
  // const user = true ;
  // console.log(user)
  if(user){
    if(user.type == "company")
      return (<Navigate to="/dashboard"/> );
    return (<Navigate to="/job-list" />);
  }
  
  return (
    <Outlet/>
  )
}


export default AuthLayout;