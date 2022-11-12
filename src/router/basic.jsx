import { Navigate, Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { UserContext} from "../App";

function BasicLayout(props) {
  const [user , setUser] = useContext(UserContext);
  // const user = true ;
  // console.log(user)
  if(!user){
    return (<Navigate to="/login" />);
  }
  return (
    <Outlet/>
  )
}

export default BasicLayout;