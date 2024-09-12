import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import ProtectedRouteProps from "../Interfaces/RouteInter";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
