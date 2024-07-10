import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginForm } from "../../../components";
import { UserContext } from "../../../context/UserContext";

export function LoginPage() {
  const { user } =  useContext(UserContext)
  return (
    <>
      <LoginForm/>
      {user.uid && <Navigate to='/'/>}      
    </>
  )
}
