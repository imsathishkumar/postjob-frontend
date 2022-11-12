import { Navigate, Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { UserContext} from "../App";

function ProfessionalLayout(props) {
  const [user , setUser] = useContext(UserContext);
  // const user = true ;
  // console.log(user)
  if(user.type == "professional"){
    return (<Outlet/>);
  }
  return (
    <Navigate to="/login" />
  )
}

export default ProfessionalLayout;