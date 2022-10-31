import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const AuthProvider = () => {
  const isAuth = localStorage.getItem("user");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export const UserProvider = () => {
  const isAuth = localStorage.getItem("user");

  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
