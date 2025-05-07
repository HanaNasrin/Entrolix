import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const role = localStorage.getItem("role");

  // If no role is found, redirect to login
  // if (!role) {
  //   return <Navigate to="/login" replace />;
  // }

  // If role is not allowed, redirect to fallback page
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/#" replace />;
  }

  return children;
};

export default ProtectedRoute;
